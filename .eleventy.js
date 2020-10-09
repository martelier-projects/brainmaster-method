module.exports = function (eleventyConfig) {
  // Watch our compiled assets for changes.
  eleventyConfig.addWatchTarget("./src/compiled-assets/main.css");
  eleventyConfig.addWatchTarget("./src/compiled-assets/main.js");
  eleventyConfig.addWatchTarget("./src/compiled-assets/vendor.js");

  // Copy src/compiled-assets to /assets.
  eleventyConfig.addPassthroughCopy({ "src/compiled-assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
