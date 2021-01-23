import * as React from 'react';
import KeyboardButton from '../KeyboardButton/KeyboardButton';
import axios from 'axios';
import { CursorPosition } from '_/types/cursor-position';
import toast, { Toaster } from 'react-hot-toast';

interface PickupBallProps {
  error?: Error;
  children?: React.ReactNode;
  onComplete: () => {};
}

export default function PickupBall({ onComplete }) {
  const [hasCursorPosition, setHasCursorPosition] = React.useState<boolean>();

  const cancel = () => {
    axios.post('/pressKey', { keyCode: 'escape' }).then(response => {});
    onComplete();
  };
  const submit = () => {
    axios.post('/savePickupScore').then(response => {});
    onComplete();
  };

  const saveCursorPosition = async () => {
    await axios.post('/setPickupOKButtonCursorPosition');
    setHasCursorPosition(true);
    toast.success('Calibration Successful.');
  };

  React.useEffect(() => {
    axios.get('/getPickupOKButtonCursorPosition').then((position: { data: CursorPosition }) => {
      setHasCursorPosition(position.data.x > 0);
    });
  }, []);

  return (
    <div>
      <div className="pickup-text-section">
        <h4>What score did you have for this hole?</h4>
      </div>
      <div className="grid pickup-options">
        <div className="row">
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="1">
              1
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="2">
              2
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="3">
              3
            </KeyboardButton>
          </div>
        </div>
        <div className="row">
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="4">
              4
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="5">
              5
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="6">
              6
            </KeyboardButton>
          </div>
        </div>
        <div className="row">
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="7">
              7
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="8">
              8
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="backspace" secondKeyCode="9">
              9
            </KeyboardButton>
          </div>
        </div>
      </div>

      {hasCursorPosition === false && (
        <div className="pickup-text-section">
          <h3>Wait! Remote requires calibration!</h3>
          <p>Optishot Remote Controller needs to be calibrated to know the location of the "OK" button so it can click it for you.</p>

          <p>
            Move your computer mouse over the "OK" button in Optishot and{' '}
            <a onClick={saveCursorPosition}>click here to set the remote calibration</a>.
          </p>
        </div>
      )}
      <div className="popup-actions row">
        <div className="button-cell">
          <button className="btn cancel" onClick={cancel}>
            Cancel
          </button>
        </div>
        <div className="button-cell">
          <button className="btn continue" disabled={!hasCursorPosition} onClick={submit}>
            Continue
          </button>
        </div>
      </div>
      <Toaster position="bottom-center" />

      {hasCursorPosition === true && (
        <div className="pickup-text-section">
          Is the "OK" button not clicking when you press "Continue"? Move your computer mouse over the "OK" button in Optishot and{' '}
          <a onClick={saveCursorPosition}>click here to update the remote calibration</a>.
        </div>
      )}
    </div>
  );
}
