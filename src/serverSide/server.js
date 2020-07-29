import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serverRoutes from '../frontend/routes/serverRoutes';
import Layout from '../frontend/components/Layout';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.dev.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

const setResponse = (html) => {
  return `
  <!DOCTYPE html>
    <html lang="en">  
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel='stylesheet' href='assets/app.css' type='text/css'>
      <title>Platzi Badges</title>
    </head>  
    <body>
      <div id="app">${html}</div>
      <div id="modal"></div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>  
  </html>
  `;
};

const renderApp = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Layout>{renderRoutes(serverRoutes)}</Layout>
    </StaticRouter>
  );

  res.send(setResponse(html));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});
