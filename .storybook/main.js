module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      'name': '@storybook/preset-create-react-app',
      "options": {
        "craOverrides": {
          "fileLoaderExcludes": ["less"]
        }
      }
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            sourceMap: true,
          }
        }]
    });
    return config;
  },
};
