module.exports = {
  /* Since purging of css done by using postcss */
  purge: false,
  theme: {
    extend: {
      animation: {
        "custom-spin": "spin 0.5s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
