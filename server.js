require("ignore-styles");
require("@babel/register")({
  ignore: [/(node_modules)/, /\.(css|svg)/],
  presets: ["@babel/preset-env", "@babel/react"]
});
require("./app");
