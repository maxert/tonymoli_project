module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-cssnext": {
      browsers: ["last 2 versions", "ie 6-8", "Firefox > 20"],
      feature: {
        autoprefixer: { grid: true },
      },
    },

    // "autoprefixer":{
    //   browsers: ["last 2 versions", "ie 6-8", "Firefox > 20"],
    //   grid: true,
    // },
    cssnano: {
      preset: "default",
    },
    "css-mqpacker": {
      sort: true,
    },
    "postcss-reporter": {},
  },
};
