module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)

  // Watch our compiled assets for changes.
  eleventyConfig.addWatchTarget('./src/compiled-assets/styles/base.css')
  eleventyConfig.addWatchTarget('./src/compiled-assets/scripts/bundle.js')
  eleventyConfig.addWatchTarget('./src/compiled-assets/scripts/modernizr.js')

  // Copy src/compiled-assets to /assets.
  eleventyConfig.addPassthroughCopy({ 'src/compiled-assets': 'assets' })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
