import * as React from 'react';
import KeyboardButton from './KeyboardButton/KeyboardButton';
import KeyholdButton from './KeyboardButton/KeyholdButton';
import styles from './Controller.module.css';
import axios from 'axios';
// import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default function Controller() {
  const mouseMove = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log('event', e);
    axios.post('/mouseMove', { e: e }).then(response => {});
  };

  return (
    <div>
      <div className="row">
        <KeyboardButton keyCode="escape">Cancel</KeyboardButton>
        <KeyboardButton keyCode="h" modifier="control">
          Left/Right Hand
        </KeyboardButton>
        <KeyboardButton keyCode="s" modifier="control">
          Score
        </KeyboardButton>
        <KeyboardButton keyCode="r" modifier="control">
          Mulligan
        </KeyboardButton>
        <KeyboardButton keyCode="f9">Camera</KeyboardButton>
      </div>
      {/* next hole ctrl p */}
      {/* select a hole */}
      <div className="row">
        <KeyboardButton keyCode="o" modifier="control">
          Map
        </KeyboardButton>
        <KeyboardButton keyCode="d" modifier="control">
          Shot Stats
        </KeyboardButton>
        <KeyboardButton keyCode="a" modifier="control">
          Accurary
        </KeyboardButton>
      </div>
      <div className="row">
        <div className="column">
          <KeyboardButton keyCode="pageup">Angle Up</KeyboardButton>
          <KeyboardButton keyCode="pagedown">Angle Down</KeyboardButton>
        </div>
        <div className="column">
          <KeyboardButton keyCode="up">Club Up</KeyboardButton>
          <KeyboardButton keyCode="down">Club Down</KeyboardButton>
        </div>
      </div>
      <div className="row">
        <div>
          <KeyholdButton keyCode="left">Left</KeyholdButton>
        </div>
        <div>
          <KeyholdButton keyCode="right">Right</KeyholdButton>
        </div>
      </div>
    </div>
  );
}
