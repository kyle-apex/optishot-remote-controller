import * as React from 'react';
import KeyboardButton from '../../components/KeyboardButton/KeyboardButton';
import KeyholdButton from '../../components/KeyboardButton/KeyholdButton';
import Popup from 'reactjs-popup';
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight, FaRegHandRock } from 'react-icons/fa';
import { MdGolfCourse, MdShuffle, MdTune, MdUndo, MdMap, MdViewList, MdSwitchVideo, MdExitToApp } from 'react-icons/md';
import { RiRulerLine } from 'react-icons/ri';
import { GiMultipleTargets, GiHand } from 'react-icons/gi';
import PickupBall from '_/components/PickupBall/PickupBall';
import 'reactjs-popup/dist/index.css';

export default function Controller() {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="container">
      <div className="first-row row">
        <div className="button-cell">
          <KeyboardButton keyCode="h" modifier="control">
            <GiHand />
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="s" modifier="control">
            <MdViewList />
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="f9">
            <MdSwitchVideo />
          </KeyboardButton>
        </div>
      </div>
      <div className="row second-row">
        <div className="button-cell">
          <KeyboardButton keyCode="a" modifier="control">
            <GiMultipleTargets />
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="d" modifier="control">
            <MdTune />
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="o" modifier="control">
            <MdMap />
          </KeyboardButton>
        </div>
      </div>
      <div className="row shot-selection-row">
        <div className="column">
          <div className="vertical-arrow-container">
            <div className="button-cell">
              <KeyboardButton keyCode="pageup">
                <FaChevronUp />
              </KeyboardButton>
            </div>
            <div className="buttons-label">
              <MdShuffle />
            </div>
            <div className="button-cell">
              <KeyboardButton keyCode="pagedown">
                <FaChevronDown />
              </KeyboardButton>
            </div>
          </div>
        </div>
        <div className="column middle-column">
          <div className="button-cell">
            <KeyboardButton keyCode="r" modifier="control">
              <MdUndo />
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <Popup open={open} onClose={closeModal} modal>
              <PickupBall onComplete={closeModal}></PickupBall>
            </Popup>
            <KeyboardButton
              keyCode="p"
              modifier="control"
              onClick={() => {
                setOpen(true);
              }}
            >
              <FaRegHandRock />
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="escape">
              <MdExitToApp />
            </KeyboardButton>
          </div>
        </div>
        <div className="column">
          <div className="vertical-arrow-container">
            <div className="button-cell">
              <KeyboardButton keyCode="up">
                <FaChevronUp />
              </KeyboardButton>
            </div>
            <div className="buttons-label">
              <RiRulerLine />
            </div>
            <div className="button-cell">
              <KeyboardButton keyCode="down">
                <FaChevronDown />
              </KeyboardButton>
            </div>
          </div>
        </div>
      </div>
      <div className="row right-left-row">
        <div className="horizontal-arrow-container">
          <div className="button-cell">
            <KeyholdButton keyCode="left">
              <FaChevronLeft />
            </KeyholdButton>
            <KeyboardButton keyCode="left">
              <FaChevronLeft />
            </KeyboardButton>
          </div>
          <div className="buttons-label">
            <MdGolfCourse />
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="right">
              <FaChevronRight />
            </KeyboardButton>
            <KeyholdButton keyCode="right">
              <FaChevronRight />
            </KeyholdButton>
          </div>
        </div>
      </div>
    </div>
  );
}
