import * as React from 'react';
import axios from 'axios';
import styles from './KeyboardButton.module.css';
import { ButtonProps } from './ButtonProps';

export default function KeyholdButton(props: ButtonProps) {
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
