module.exports = {
  chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.keep_classnames = true;
      args[0].terserOptions.keep_fnames = true;

      return args;
    });
  }
}
