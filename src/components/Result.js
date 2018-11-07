import React, { Component } from 'react';
import enIco from '../images/en.ico';

class Result extends Component {
  constructor({ word }) {
    super();
    this.state = { word };
    console.log(this.state);
  }

  componentWillReceiveProps({ word }) {
    this.setState({ ...this.state, word });
  }

  render() {
    console.log(this.state);

    return (
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s1">
              <img src={enIco} alt="english icon" className="circle responsive-img" />
            </div>
            <div className="col s10">
              <span className="black-text">
                { this.state.word.enTerm }
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
