import * as React from 'react';
import axios from 'axios';
import styles from './KeyboardButton.module.css';
import { ButtonProps } from './ButtonProps';

export default function KeyboardButton(props: ButtonProps) {
  const pressKey = () => {
    axios.post('/pressKey', { keyCode: props.keyCode, modifier: props.modifier }).then(response => {});
  };

  return (
    <button className={styles.btn} onClick={pressKey}>
      {props.children}
    </button>
  );
}
