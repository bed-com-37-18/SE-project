module.exports = {
  purge: ["./pages/**/*.{js,jsx}","../components/**/*.{js,jsx}"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
