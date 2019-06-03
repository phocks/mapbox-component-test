const path = require("path");

module.exports = {
  type: "react",
  webpack: {
    resolve: {
      alias: {
        react: path.resolve("node_modules/react")
      }
    }
  }
};
