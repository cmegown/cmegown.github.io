const slugify = require("slugify");

module.exports = config => {
  config.addPassthroughCopy('./src/styles.css');

  // https://github.com/11ty/eleventy/issues/278
  config.addFilter("slugify", str => {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g
    });
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
