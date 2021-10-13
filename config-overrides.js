module.exports = function override(config, env) {
  return {
    ...config,
    entry: {
      main: './src/index.tsx',
      background: './src/scripts/background.ts'
    },
    output: {
      ...config.output,
      filename: 'static/js/[name].js',
    },
    optimization: {},
  };
};
