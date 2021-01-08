/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import '_public/style.css';

import * as React from 'react';
import { render } from 'react-dom';
import App from '../components/App';

render(
  <div className="app">
    <App />
  </div>,
  document.getElementById('app'),
);
