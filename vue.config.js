const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/*/**',
          to: ''
        }, {
          from: 'src/index.ts',
          to: 'src'
        }, {
          from: 'src/global.d.ts',
          to: 'src'
        }
      ])
    ]
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: `
          @import '@/assets/sass/_animations.scss';
          @import '@/assets/sass/_breakpoints.scss';
          @import '@/assets/sass/_colors.scss';
          @import '@/assets/sass/_fonts.scss';
          @import '@/assets/sass/_functions.scss';
          @import '@/assets/sass/_keen-ui.scss';
          @import '@/assets/sass/_mixins.scss';
          @import '@/assets/sass/_transitions.scss';
          @import '@/assets/sass/_variables.scss';
        `
      }
    }
  }
};
