const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#f78f1e',
              '@secondary-color': '#ffc808',
              '@border-radius-base': '16px',
              '@info-color': '@primary-color',
              '@font-family': [
                'Prompt',
                'Lato',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Fira Sans',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
              ],
              '@processing-color': '#fff',
              '@input-bg': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
