module.exports = {
  plugins: [
    "removeDimensions",
    "removeXMLNS",
    "sortAttrs",
    {
      name: "removeAttrs",
      params: {
        attrs: "fill",
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            fill: "currentColor",
          },
          { "aria-hidden": "true" },
        ],
      },
    },
  ],
};
