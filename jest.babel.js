module.exports = require('babel-jest').createTransformer({
    presets: ['@babel/preset-env'],
    plugins: ["@babel/plugin-transform-runtime"]
});
