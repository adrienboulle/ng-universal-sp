import { enableProdMode, NgModuleFactory } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
require('zone.js/dist/zone-node.js');
require('reflect-metadata');

import * as express from 'express';

import { AppServerModuleNgFactory } from './app/app.server.ngfactory';
const appIndex = require('raw-loader!./app/index.html');
const appIndexLazy = require('raw-loader!./app/index-lazy.html');

import { LoginServerModuleNgFactory } from './login/app.server.ngfactory';
const loginIndex = require('raw-loader!./login/index.html');

const port = process.env.PORT || 9876;
const app = express();

function render<T>(moduleFactory: NgModuleFactory<T>, html: string) {
  return (req: any, res: any) => {
    renderModuleFactory(moduleFactory, {
      document: html,
      url: req.url,
    })
    .then((response) => { res.send(response); });
  };
}

enableProdMode();

app.use('/built', express.static('built'));
app.use('/node_modules', express.static('node_modules'));

app.get('/data', (req, res) => res.json({ name: 'Adrien' }));

app.get('/home', render(AppServerModuleNgFactory, appIndex));
app.get('/lazy', render(AppServerModuleNgFactory, appIndexLazy));
app.get('/login*', render(LoginServerModuleNgFactory, loginIndex));

app.listen(port, function() { console.log(`Server listening on port ${port}!`); });
