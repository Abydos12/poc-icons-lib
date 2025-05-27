export default {
  plugins: [
    "removeDimensions",
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [{ color: "currentColor" }],
      },
    },
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
