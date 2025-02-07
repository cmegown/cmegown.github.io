export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');
};

export const config = {
  htmlTemplateEngine: 'njk',
  markdownTemplateEngine: 'njk',
  dir: {
    input: 'src',
    output: 'dist'
  }
};
