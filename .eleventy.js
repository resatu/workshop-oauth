module.exports = function (eleventyConfig) {
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("assets/scripts/**.*");
  eleventyConfig.addPassthroughCopy("assets/styles/**.*");
  eleventyConfig.addPassthroughCopy("assets/images/**.*");
};
