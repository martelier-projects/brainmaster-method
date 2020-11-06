const yaml = require('js-yaml')

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)

  // Watch our compiled assets for changes.
  eleventyConfig.addWatchTarget('./src/compiled-assets/styles/base.css')
  eleventyConfig.addWatchTarget('./src/compiled-assets/scripts/bundle.js')
  eleventyConfig.addWatchTarget('./src/compiled-assets/scripts/modernizr.js')

  // Copy src/compiled-assets to /assets.
  eleventyConfig.addPassthroughCopy({
    'src/compiled-assets': 'assets',
    './src/admin/config.yml': '../dist/admin/config.yml',
  })

  // To Support .yaml Extension in _data,
  // .yaml files are created by the NetlifyCMS automatically.
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents))

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
