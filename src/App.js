import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dictionary from './components/Dictionary';

class App extends Component {
  componentDidMount() {
    document.title = 'VR Translate';
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="row center-align">
              <img src="./images/logo.png" alt="vr logo" className="responsive-img" />
            </div>
          </div>
          <Dictionary />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
