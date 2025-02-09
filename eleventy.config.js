import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';

export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.addPlugin(EleventyVitePlugin);
};

export const config = {
  htmlTemplateEngine: 'njk',
  markdownTemplateEngine: 'njk',
  dir: {
    input: 'src',
    output: 'dist'
  }
};
