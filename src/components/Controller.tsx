import * as React from 'react';
import KeyboardButton from './KeyboardButton/KeyboardButton';
import KeyholdButton from './KeyboardButton/KeyholdButton';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
//import styles from './Controller.css';

export default function Controller() {
  return (
    <div className="container">
      <div className="first-row row">
        <div className="button-cell">
          <KeyboardButton keyCode="h" modifier="control">
            L/R Hand
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="s" modifier="control">
            Score
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="f9">Camera</KeyboardButton>
        </div>
      </div>
      <div className="row second-row">
        <div className="button-cell">
          <KeyboardButton keyCode="o" modifier="control">
            Map
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="d" modifier="control">
            Shot Stats
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="a" modifier="control">
            Accuracy
          </KeyboardButton>
        </div>
      </div>
      <div className="row shot-selection-row">
        <div className="column">
          <div className="button-cell">
            <KeyboardButton keyCode="pageup">
              <FaChevronUp />
            </KeyboardButton>
          </div>
          <div className="buttons-label">Angle</div>
          <div className="button-cell">
            <KeyboardButton keyCode="pagedown">
              <FaChevronDown />
            </KeyboardButton>
          </div>
        </div>
        <div className="column middle-column">
          <div className="button-cell">
            <KeyboardButton keyCode="r" modifier="control">
              Mulligan
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="escape">Escape</KeyboardButton>
          </div>
        </div>
        <div className="column">
          <div className="button-cell">
            <KeyboardButton keyCode="up">
              <FaChevronUp />
            </KeyboardButton>
          </div>
          <div className="buttons-label">Club</div>
          <div className="button-cell">
            <KeyboardButton keyCode="down">
              <FaChevronDown />
            </KeyboardButton>
          </div>
        </div>
      </div>
      <div className="row right-left-row">
        <div className="button-cell">
          <KeyholdButton keyCode="left">Left</KeyholdButton>
        </div>
        <div className="button-cell">
          <KeyholdButton keyCode="right">Right</KeyholdButton>
        </div>
      </div>
    </div>
  );
}
