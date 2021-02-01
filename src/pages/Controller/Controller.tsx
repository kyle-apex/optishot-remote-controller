import * as React from 'react';
import KeyboardButton from '../../components/KeyboardButton/KeyboardButton';
import KeyholdButton from '../../components/KeyboardButton/KeyholdButton';
import Popup from 'reactjs-popup';
//import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight, FaRegHandRock } from 'react-icons/fa';
//import { MdGolfCourse, MdShuffle, MdTune, MdUndo, MdMap, MdViewList, MdSwitchVideo, MdExitToApp } from 'react-icons/md';
//import { RiRulerLine } from 'react-icons/ri';
//import { GiMultipleTargets, GiHand } from 'react-icons/gi';
import PickupBall from '_/components/PickupBall/PickupBall';
import {
  ScoreCard,
  HandToggle,
  Camera,
  RangeStats,
  ShotStats,
  Map,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mulligan,
  Escape,
  PickupBallIcon,
  GolfFlag,
  LaunchAngle,
  ClubDistance,
} from '_/components/icons';
import 'reactjs-popup/dist/index.css';

export default function Controller() {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="container">
      <div className="first-row row">
        <div className="button-cell">
          <KeyboardButton keyCode="h" modifier="control">
            <HandToggle />
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="s" modifier="control">
            <ScoreCard />
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="f9">
            <Camera />
          </KeyboardButton>
        </div>
      </div>
      <div className="row second-row">
        <div className="button-cell">
          <KeyboardButton keyCode="a" modifier="control">
            <RangeStats />
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="d" modifier="control">
            <ShotStats />
          </KeyboardButton>
        </div>
        <div className="button-cell">
          <KeyboardButton keyCode="o" modifier="control">
            <Map />
          </KeyboardButton>
        </div>
      </div>
      <div className="row shot-selection-row">
        <div className="column">
          <div className="vertical-arrow-container">
            <div className="button-cell">
              <KeyboardButton keyCode="pageup">
                <ChevronUp />
              </KeyboardButton>
            </div>
            <div className="buttons-label">
              <LaunchAngle />
            </div>
            <div className="button-cell">
              <KeyboardButton keyCode="pagedown">
                <ChevronDown />
              </KeyboardButton>
            </div>
          </div>
        </div>
        <div className="column middle-column">
          <div className="button-cell">
            <KeyboardButton keyCode="r" modifier="control">
              <Mulligan />
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
              <PickupBallIcon />
            </KeyboardButton>
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="escape">
              <Escape />
            </KeyboardButton>
          </div>
        </div>
        <div className="column">
          <div className="vertical-arrow-container">
            <div className="button-cell">
              <KeyboardButton keyCode="up">
                <ChevronUp />
              </KeyboardButton>
            </div>
            <div className="buttons-label">
              <ClubDistance />
            </div>
            <div className="button-cell">
              <KeyboardButton keyCode="down">
                <ChevronDown />
              </KeyboardButton>
            </div>
          </div>
        </div>
      </div>
      <div className="row right-left-row">
        <div className="horizontal-arrow-container">
          <div className="button-cell">
            <KeyholdButton keyCode="left">
              <ChevronLeft />
            </KeyholdButton>
            <KeyboardButton keyCode="left">
              <ChevronLeft />
            </KeyboardButton>
          </div>
          <div className="buttons-label">
            <GolfFlag />
          </div>
          <div className="button-cell">
            <KeyboardButton keyCode="right">
              <ChevronRight />
            </KeyboardButton>
            <KeyholdButton keyCode="right">
              <ChevronRight />
            </KeyholdButton>
          </div>
        </div>
      </div>
    </div>
  );
}
