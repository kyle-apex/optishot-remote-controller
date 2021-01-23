const express = require('express');

const app = express();

const path = require('path');

const robot = require('robotjs');

import os from 'os';

import detectPort from 'detect-port';

import ip from 'ip';
import { CursorPosition } from './types/cursor-position';

const Store = require('electron-store');

const store = new Store();

app.get('/', (req: any, res: any) => {
  res.redirect(301, '/controller');
});

app.set('trust proxy', true);

// serve up production assets
app.use(express.static(path.join(__dirname, '')));

app.get('/serverInfo', function (req: any, res: any) {
  res.send({ hostname: ip.address() || os.hostname(), port: port });
});

app.use(express.json());

app.post('/pressKey', function (req: any, res: any) {
  res.send();

  let modifiers = req.body.modifier ? [req.body.modifier] : [];
  pressKey(req.body.keyCode, modifiers);
});

app.post('/savePickupScore', function (req: any, res: any) {
  res.send();
  const position = getPickupOKButtonCursorPosition();
  robot.moveMouse(position.x, position.y);
  robot.mouseClick('left');

  // move the mouse out of the way
  setTimeout(() => {
    robot.moveMouse(position.x, 100);
  }, 100);
});

app.post('/holdKey', function (req: any, res: any) {
  res.send();

  holdKey(req.body.keyCode);
});

app.post('/releaseKey', function (req: any, res: any) {
  res.send();

  releaseKey(req.body.keyCode);
});

app.post('/setPickupOKButtonCursorPosition', function (req: any, res: any) {
  res.send();

  const position = robot.getMousePos();
  setPickupOKButtonCursorPosition(position.x, position.y);
});

app.get('/getPickupOKButtonCursorPosition', function (req: any, res: any) {
  const position = getPickupOKButtonCursorPosition();
  res.send({ x: position.x, y: position.y });
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

function getPickupOKButtonCursorPosition(): CursorPosition {
  return new CursorPosition(store.get('pickupOKButtonCursorX'), store.get('pickupOKButtonCursorY'));
}

function setPickupOKButtonCursorPosition(x: number, y: number) {
  store.set('pickupOKButtonCursorX', x);
  store.set('pickupOKButtonCursorY', y);
}

// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// if not in production use the port 5000
let port = process.env.PORT || '5000';

// if not available, try one more port
detectPort(port, (err, availablePort) => {
  if (port !== String(availablePort)) {
    port = String(Number(port) - 1);
    process.env.PORT = port;
  }
  app.listen(port);
  console.log('server started on port:', port);
});
