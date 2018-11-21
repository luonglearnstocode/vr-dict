import React, { Component } from 'react';
import Dictionary from './components/Dictionary';

class App extends Component {
  componentDidMount() {
    document.title = 'VR Translate';
  }

  render() {
    return (
      <div className="App">
        <div className="row center-align">
          <img id="logo" src="./images/logo.png" alt="vr logo" className="responsive-img" />
        </div>
        <Dictionary />
      </div>
    );
  }
}

export default App;
