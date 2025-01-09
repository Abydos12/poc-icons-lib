/**
 * @type {import('svgtofont').SvgToFontOptions}
 */
export default {
  emptyDist: true,
  fontName: "myfont",
  css: {
    include: /\.(css)$/g,
  },
  useNameAsUnicode: true,
  outSVGReact: false,
  website: {
    title: "lib-icons",
    description: "",
    footerInfo: "footer info",
  },
};
