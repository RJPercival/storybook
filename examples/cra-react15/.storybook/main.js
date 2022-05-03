const path = require('path');

module.exports = {
  stories: ['../src/stories/welcome.stories', '../src/stories/**/button.stories.js'],
  logLevel: 'debug',
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-ie11',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: (config) => {
    // add monorepo root as a valid directory to import modules from
    config.resolve.plugins.forEach((p) => {
      if (Array.isArray(p.appSrcs)) {
        p.appSrcs.push(path.join(__dirname, '..', '..', '..'));
      }
    });
    return config;
  },
  core: {
    builder: 'webpack4',
    disableTelemetry: true,
  },
  staticDirs: ['../public'],
};
