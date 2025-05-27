/** @type {import('@twbs/fantasticon').RunnerOptions} */
module.exports = {
  inputDir: "icons",
  outputDir: "./dist",
  prefix: "icon",
  fontTypes: ["ttf", "woff", "woff2"],
  assetTypes: ["ts", "css", "json", "html"],
  normalize: true, // Use a custom Handlebars template
  templates: {
    css: "./templates/css.hbs",
    html: "./templates/html.hbs",
  },
  pathOptions: {
    // ts: "./src/types/icon-types.ts",
    // json: "./misc/icon-codepoints.json",
  },
};
