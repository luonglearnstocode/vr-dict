import React, { Component } from 'react';
import logo from './images/logo.jpg';

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
      <div className="App">
        It is
        { date.toString() }
        <div className="row center-align">
          <img src={logo} alt="vr logo" height="200" width="200" />
        </div>
      </div>
    );
  }
}

export default App;
