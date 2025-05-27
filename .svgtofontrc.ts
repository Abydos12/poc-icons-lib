import { SvgToFontOptions } from "svgtofont";

export default {
  fontName: "my-font",
  emptyDist: true,
  css: {
    include: /\.(css)$/g,
    fontSize: "1rem",
  },
  addLigatures: true,
  useCSSVars: true,
  outSVGReact: false,
  // excludeFormat: ["eot", "svg", "symbol.svg"],
  website: {
    title: "lib-icons",
    description: "",
    footerInfo: "footer info",
    links: [],
  },
} satisfies SvgToFontOptions;
