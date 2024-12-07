module.exports = {
  inputDir: "icons",
  outputDir: "./dist",
  prefix: "icon",
  fontTypes: ["woff2"],
  assetTypes: ["ts", "css", "json", "html"],
  formatOptions: {
    woff: {
      // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
    },
    ts: {
      // customise names used for the generated types and constants
      enumName: "MyIconType",
      constantName: "MY_CODEPOINTS",
      // literalIdName: 'IconId',
      // literalKeyName: 'IconKey'
    },
  }, // Use a custom Handlebars template
  templates: {
    css: "./templates/css.hbs",
  },
  pathOptions: {
    // ts: "./src/types/icon-types.ts",
    // json: "./misc/icon-codepoints.json",
  },
};
