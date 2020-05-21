import React, { Fragment } from 'react';
import Key from './Key/Key';

/** AUDIO LOGIC */

// Note frequencies from C4 to C5
const noteFreq = [
  [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88],
];

const keyboardString = 'zxcvbnm,./asdfghjkl;\'qwetyuiop[]\\';

for (let el of keyboardString) {
  console.log(el)
}

let audioContext = new (window.AudioContext || window.webkitAudioContext);
let list = null;

function playTone(freq) {
  let osc = audioContext.createOscillator();
  let type = 'sine';
  osc.type = type;
  osc.frequency.value = freq;
  osc.start();
  osc.connect(audioContext.destination);
  return osc;
}

class Keyboard extends React.Component {

  state = {
    noteFreq: [...noteFreq]
  }

  pressKeyHandler = e => {
    // 1. Get octave and note values
    const freq = e.currentTarget.dataset.note;

    // 2. Play a note
    list = playTone(freq);

    console.log('key is pressed');
  };

  releasedKeyHandler = e => {
    // 1. Stop playing note
    list.stop();
    list = null;
    console.log('stop');
  }

  render() {
    const keyBoard = this.state.noteFreq[0].map(key => {
      return (
        <Key
          key={key}
          frequency={key}
          pressedKey={this.pressKeyHandler}
          releasedKey={this.releasedKeyHandler} />
      );
    });
    return (
      <Fragment>
        <h1>Synth keyboard</h1>
        {keyBoard}
      </Fragment>
    );
  }
}

export default Keyboard;