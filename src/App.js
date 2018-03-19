import React, { Component } from 'react';
import './App.css';

const keys = {
  'Delete': 'CE'
  , 'Escape': 'C'
  , 'Backspace': 'back'
  , '=': 'equals'
  , '/': 'divide'
  , '*': 'times'
  , '-': 'minus'
  , '+': 'plus'
  , '.': 'point'
  , '_': 'plusMinus'
  , '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
};

window.addEventListener('keydown', e => {
  if (keys.hasOwnProperty(e.key)) {
    handleButtonDown(keys[e.key]);
  }
});

window.addEventListener('keyup', e => {
  if (keys.hasOwnProperty(e.key)) {
    handleButtonUp(keys[e.key]);
  }
});

function handleButtonDown(button) {
  console.log(button);
  document.querySelector(`button[value='${button}']`).classList.add('fauxActive');
}

function handleButtonUp(button) {
  document.querySelector(`button[value='${button}']`).classList.remove('fauxActive');
}

function Screen(props) {
  return (
    <div className='screen' id='screen'>0  [{props.thing}] </div>
  );
}

function Button(props) {
  return (
    <button value={props.value} className='calcBtn' onMouseDown={() => handleButtonDown(props.value)} onMouseUp={() => handleButtonUp(props.value)} tabIndex='-1'>
      {props.text}
    </button>
  );
}

class Calculator extends React.Component {

  constructor(props) {
    super();
    this.state = {
      topLine: 1,
      bottomLine: 2
    };
  }


  renderButton(value) {
    const displays = {
      'CE': 'CE'
      , 'C': 'C'
      , 'back': '⌫'
      , 'divide': '÷'
      , 'times': '×'
      , 'minus': '−'
      , 'plus': '+'
      , 'equals': '='
      , 'point': '.'
      , 'plusMinus': '±'
      , '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    };
    return (
      <Button value={value} text={displays[value]} />
    );
  }

  renderRow(btnVals) {
    return (
      <div className='btnRow'>
        {this.renderButton(btnVals[0])}
        {this.renderButton(btnVals[1])}
        {this.renderButton(btnVals[2])}
        {this.renderButton(btnVals[3])}
      </div>
    );
  }

  render() {
    return (
      <div className="calculator">
        <Screen />
        {this.renderRow(['CE', 'C', 'back', 'divide'])}
        {this.renderRow(['7', '8', '9', 'times'])}
        {this.renderRow(['4', '5', '6', 'minus'])}
        {this.renderRow(['1', '2', '3', 'plus'])}
        {this.renderRow(['plusMinus', '0', 'point', 'equals'])}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Calc</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
