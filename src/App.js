import React, { Component } from 'react';
import Dictionary from './components/Dictionary';

class App extends Component {
  componentDidMount() {
    document.title = 'VR Translate';
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row center-align">
            <img src="./images/logo.png" alt="vr logo" className="responsive-img" />
          </div>
        </div>
        <Dictionary />
      </div>
    );
  }
}

export default App;
