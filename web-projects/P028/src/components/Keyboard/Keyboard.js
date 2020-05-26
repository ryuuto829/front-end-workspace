import React, { Fragment } from 'react';
import Key from './Key/Key';

/** AUDIO LOGIC */

// Note frequencies from C4 to C5
// const noteFreq = [
//   [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88],
// ];


const root = 261.63;
const number = 7;
const ratios = [
  1, 9 / 8, 5 / 4, 4 / 3, 3 / 2, 5 / 3, 15 / 8
];

const noteFreq = ratios.map(el => el * root);

const keys = [
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'
];

// const keysNegative = [
//   'Slash', 'Period', 'Comma', 'KeyM', 'KeyN', 'KeyB', 'KeyV', 'KeyC', 'KeyX', 'KeyZ'
// ];


/** num - number of notes in scale
 */
function findFirstKeyStep(num) {
  const fullOctaves = Math.floor(10 / num);
  const overflow = (10 - num * fullOctaves);
  if (overflow === 0) {
    return 0;
  } else {
    return num - overflow;
  }
}

function findFirstKeyOctave(num) {
  const fullOctaves = Math.floor(10 / num);
  if (num <= 10) {
    if (10 % num) {
      return 4 - fullOctaves - 1;
    } else {
      return 4 - fullOctaves;
    }
  } else {
    return 4;
  }

}

console.log(findFirstKeyStep(3))
console.log(findFirstKeyOctave(3));

const keysMap = {};



keysPositive.forEach(el => {
  keysMap[el] = {
    octave: 0,
    frequency: 440,
    step: 0
  }
});

console.log(keysMap);

//const noteFreq2 = ratios.map(el => el*root*2);
//console.log(noteFreq);

// const keyboardString = 'zxcvbnm,./asdfghjkl;\'qwetyuiop[]\\';

// for (let el of keyboardString) {
//   console.log(el)
// }

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
    console.log(e.code);
    // 1. Get octave and note values
    //const freq = e.currentTarget.dataset.note;

    // 2. Play a note
    //list = playTone(freq);
  };

  releasedKeyHandler = e => {
    // 1. Stop playing note
    list.stop();
    list = null;
    console.log('stop');
  }

  componentDidMount() {
    window.addEventListener('keydown', this.pressKeyHandler);
  }

  render() {
    const keyBoard = this.state.noteFreq.map(freq => {
      return (
        <Key
          key={freq}
          octave={0}
          frequency={freq}
          OnKeyUp={this.releasedKeyHandler}
          onKeyDown={this.pressKeyHandler}
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