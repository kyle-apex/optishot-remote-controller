import * as React from 'react';
import axios from 'axios';
import styles from './KeyboardButton.module.css';
// import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

interface Props {
  error?: Error;
  children?: React.ReactNode;
  keyCode?: string;
}

export default function KeyholdButton(props: Props) {
  const holdKey = e => {
    cancelEvent(e);
    axios.post('/holdKey', { keyCode: props.keyCode }).then(response => {});
  };

  const releaseKey = e => {
    cancelEvent(e);
    axios.post('/releaseKey', { keyCode: props.keyCode }).then(response => {});
  };

  const cancelEvent = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <button className={styles.btn} onTouchStart={holdKey} onContextMenu={cancelEvent} onTouchEnd={releaseKey} onSelect={cancelEvent}>
      {props.children}
    </button>
  );
}
