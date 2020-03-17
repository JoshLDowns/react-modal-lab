import React from 'react';
import Modal from './Modal.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalOpen: false
    }
  }

  toggle = () => {
    let trueFalse = this.state.modalOpen;
    this.setState({
      modalOpen: !trueFalse
    })
  }

  // handleOpen = () => {
  //   this.setState({
  //     modalOpen: true
  //   })
  // }

  // handleClose = () => {
  //   this.setState({
  //     modalOpen: false
  //   })
  // }

  render() {
    return (
      <div id='body'>
        <div id='main-container'>
          {this.state.modalOpen && <Modal toggle={this.toggle}/>}
          <h1>I'm the home page!</h1>
          <button id='open-button' onClick={this.toggle}>Open Modal</button>
        </div>
      </div>
    );
  }
}

export default App;
