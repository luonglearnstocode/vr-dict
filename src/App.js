import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dictionary from './components/Dictionary';

// import logo from './images/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    document.title = 'VR dictionary';
  }

  render() {
    const { date } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          It is
          { date.toString() }
          <div className="row center-align">
            <img src="./images/logo.png" alt="vr logo" className="responsive-img" />
          </div>
          <Dictionary />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
