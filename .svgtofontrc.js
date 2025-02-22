/**
 * @type {import('svgtofont').SvgToFontOptions}
 */
export default {
  fontName: "my-font",
  emptyDist: true,
  css: {
    include: /\.(css)$/g,
  },
  useNameAsUnicode: true,
  outSVGReact: false,
  excludeFormat: ["eot", "svg", "symbol.svg"],
  website: {
    title: "lib-icons",
    description: "",
    footerInfo: "footer info",
  },
};
