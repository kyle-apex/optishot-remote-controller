const express = require('express');

const app = express();

const path = require('path');

const robot = require('robotjs');

import os from 'os';

app.get('/', (req: any, res: any) => {
  res.redirect(301, '/controller');
});

// serve up production assets
app.use(express.static(path.join(__dirname, '')));

// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
app.get('/serverInfo', function (req: any, res: any) {
  res.send({ hostname: os.hostname() });
});

app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.json());

app.post('/pressKey', function (req: any, res: any) {
  res.send();
  let modifiers = req.body.modifier ? [req.body.modifier] : [];
  pressKey(req.body.keyCode, modifiers);
});

app.post('/holdKey', function (req: any, res: any) {
  res.send();

  holdKey(req.body.keyCode);
});

app.post('/releaseKey', function (req: any, res: any) {
  res.send();

  releaseKey(req.body.keyCode);
});

app.post('/mouseMove', function (req: any, res: any) {
  console.log('e', req.body.e);
  res.send();
});

function pressKey(keyCode: string, modifiers?: string[]) {
  holdKey(keyCode, modifiers);

  setTimeout(() => {
    releaseKey(keyCode, modifiers || []);
  }, 20);
}

function holdKey(keyCode: string, modifiers?: string[]) {
  robot.keyToggle(keyCode, 'down', modifiers || []);
}

function releaseKey(keyCode: string, modifiers?: string[]) {
  robot.keyToggle(keyCode, 'up', modifiers || []);
}

// if not in production use the port 5000
const PORT = process.env.PORT || 4999;
console.log('server started on portss:', PORT);
app.listen(PORT);
