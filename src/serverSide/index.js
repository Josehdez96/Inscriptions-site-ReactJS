require('ignore-styles');

require('@babel/register')({
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['svg', 'jpg', 'png'],
  name: 'assets/[hash].[ext]',
});

require('./server');
