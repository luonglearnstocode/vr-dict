import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const { date } = this.state;
    return (
      <div className="App">
        It is
        { date.toString() }
        <div className="row center-align">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/VR_Group_logo.svg/1200px-VR_Group_logo.svg.png" alt="vr logo" height="200" width="200" />
        </div>
      </div>
    );
  }
}

export default App;
