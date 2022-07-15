module.exports = {
  plugins: [
    // ['@snowpack/plugin-sass' ],
  ],
  mount: {
    src: "/wdd330/team5/",
  },
  buildOptions: {
    out: "build",
    baseUrl: "/sleepoutside/build/",
    clean: true,
    htmlFragments: true,
  },
  experiments: {
    optimize: {
      // 'bundle': true,
      minify: true,
      target: "es2015",
    },
  },
};
