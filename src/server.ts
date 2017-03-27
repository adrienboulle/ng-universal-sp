import { enableProdMode, NgModuleFactory } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
require('zone.js/dist/zone-node.js');

import * as express from 'express';

import { HelloWorldServerModuleNgFactory } from './helloworld/app.server.ngfactory';
const helloworld = require('raw-loader!./helloworld/index.html');

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

app.get('/data', (req, res) => res.json({ name: 'Adrien' }));

app.get('/helloworld', render(HelloWorldServerModuleNgFactory, helloworld));

app.listen(port, function() { console.log(`Server listening on port ${port}!`); });
