const fs = require('fs')
const yaml = require('js-yaml')
const Nunjucks = require('nunjucks')
const ModuleTag = require('./utils/module')
const marked = require('marked')
const dateFilter = require('nunjucks-date-filter')
const { classesFilter } = require('./utils/classes-filter')

const inPageNav = require('./src/_includes/shortcodes/in-page-nav')
const wysiwyg = require('./src/_includes/shortcodes/wysiwyg')
const navItem = require('./src/_includes/shortcodes/nav-item')

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)

  // Watch our compiled assets for changes.
  eleventyConfig.addWatchTarget('./src/_includes/**/*.njk')
  eleventyConfig.addWatchTarget('./src/compiled-assets/styles/base.css')
  eleventyConfig.addWatchTarget('./src/compiled-assets/scripts/bundle.js')
  eleventyConfig.addWatchTarget('./src/compiled-assets/scripts/modernizr.js')

  // 404 page
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('./dist/404/index.html')
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  // Copy src/compiled-assets to /assets.
  eleventyConfig.addPassthroughCopy({
    'src/compiled-assets': 'assets',
    './src/admin/config.yml': '../dist/admin/config.yml',
  })

  // Filters
  eleventyConfig.addNunjucksFilter('classes', classesFilter)
  eleventyConfig.addNunjucksFilter('date', dateFilter)

  // Add markdown filter
  const markdownParser = markdownAsText => marked(markdownAsText)
  eleventyConfig.addNunjucksFilter('markdown', markdownParser)

  // To Support .yaml Extension in _data,
  // .yaml files are created by the NetlifyCMS automatically.
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents))

  // Custom nunjucks env!
  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader('src/_includes')
  )

  nunjucksEnvironment.addExtension(
    'part',
    new ModuleTag('part', Nunjucks, nunjucksEnvironment)
  )
  nunjucksEnvironment.addExtension(
    'module',
    new ModuleTag('module', Nunjucks, nunjucksEnvironment)
  )
  nunjucksEnvironment.addExtension(
    'icon',
    new ModuleTag('icon', Nunjucks, nunjucksEnvironment)
  )

  eleventyConfig.setLibrary('njk', nunjucksEnvironment)

  // Shortcodes
  eleventyConfig.addNunjucksShortcode('inPageNav', inPageNav)
  eleventyConfig.addNunjucksShortcode('wysiwyg', wysiwyg(nunjucksEnvironment))
  eleventyConfig.addNunjucksShortcode('navItem', navItem)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
