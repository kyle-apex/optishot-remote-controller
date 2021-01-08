import * as React from 'react';
import axios from 'axios';
import styles from './KeyboardButton.css';
// import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

interface Props {
  error?: Error;
  children?: React.ReactNode;
  keyCode?: string;
  modifier?: string;
}

export default function KeyboardButton(props: Props) {
  const pressKey = () => {
    axios.post('/pressKey', { keyCode: props.keyCode, modifier: props.modifier }).then(response => {});
  };

  return (
    <button className={styles.btn} onClick={pressKey}>
      {props.children}
    </button>
  );
}
