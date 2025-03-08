import { DateTime } from 'luxon';
import { IdAttributePlugin } from '@11ty/eleventy';
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';

export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addPlugin(EleventyVitePlugin);

  eleventyConfig.addFilter('humanReadable', (date) => {
    return DateTime.fromJSDate(date, { zone: 'utc'}).toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addFilter('machineReadable', (date) => {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toISODate();
  });
};

export const config = {
  htmlTemplateEngine: 'njk',
  markdownTemplateEngine: 'njk',
  dir: {
    input: 'src',
    output: 'dist'
  }
};
