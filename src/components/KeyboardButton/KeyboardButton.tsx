import * as React from 'react';
import axios from 'axios';
import styles from './KeyboardButton.module.css';
import { ButtonProps } from './ButtonProps';

export default function KeyboardButton(props: ButtonProps) {
  const pressKey = () => {
    axios.post('/pressKey', { keyCode: props.keyCode, modifier: props.modifier }).then(response => {
      if (props.secondKeyCode) {
        setTimeout(() => {
          axios.post('/pressKey', { keyCode: props.secondKeyCode, modifier: props.modifier }).then(response => {});
        }, 100);
      }
    });
    if (props.onClick) props.onClick();
  };

  return (
    <button className={styles.btn} onClick={pressKey}>
      {props.children}
    </button>
  );
}
