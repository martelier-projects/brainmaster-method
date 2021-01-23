const yaml = require('js-yaml')
const Nunjucks = require('nunjucks')
const ModuleTag = require('./utils/module')
const marked = require('marked')
const { classesFilter } = require('./utils/classes-filter')
const inPageNav = require('./src/_includes/shortcodes/in-page-nav')

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)

  // Watch our compiled assets for changes.
  eleventyConfig.addWatchTarget('./src/_includes/**/*.njk')
  eleventyConfig.addWatchTarget('./src/compiled-assets/styles/base.css')
  eleventyConfig.addWatchTarget('./src/compiled-assets/scripts/bundle.js')
  eleventyConfig.addWatchTarget('./src/compiled-assets/scripts/modernizr.js')

  // Copy src/compiled-assets to /assets.
  eleventyConfig.addPassthroughCopy({
    'src/compiled-assets': 'assets',
    './src/admin/config.yml': '../dist/admin/config.yml',
  })

  // Filters
  eleventyConfig.addNunjucksFilter('classes', classesFilter)

  // Add markdown filter
  const markdownParser = markdownAsText => marked(markdownAsText)
  eleventyConfig.addNunjucksFilter('markdown', markdownParser)

  // To Support .yaml Extension in _data,
  // .yaml files are created by the NetlifyCMS automatically.
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents))

  // Shortcodes
  eleventyConfig.addNunjucksShortcode('inPageNav', inPageNav)
  eleventyConfig.addNunjucksShortcode('check', function (input) {
    console.log('input: ', input)
  })

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

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
