const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  //配置less
  plugins: [{ plugin: CracoLessPlugin }],
  //webpack
  webpack: {
    //别名配置
    alias: {
      "@": resolve("src"),
    },
  },
};
