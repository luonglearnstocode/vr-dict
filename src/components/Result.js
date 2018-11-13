import React, { Component } from 'react';
import en from '../images/flags/en.png';
import de from '../images/flags/de.png';
import da from '../images/flags/da.png';
import fi from '../images/flags/fi.png';
import no from '../images/flags/no.png';
import sv from '../images/flags/sv.png';
import '../index.css';


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
            <div className="col s2 l1">
              <img src={fi} alt="finland flag icon" className="circle responsive-img" title="Finnish" />
            </div>
            <div className="col s9 l10">
              <span className="black-text">
                { this.state.word.fiTerm }
              </span>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s2 l1">
              <img src={en} alt="english flag icon" className="circle responsive-img" title="English" />
            </div>
            <div className="col s9 l10">
              <span className="black-text">
                { this.state.word.enTerm }
              </span>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s2 l1">
              <img src={de} alt="germany flag icon" className="circle responsive-img" title="German" />
            </div>
            <div className="col s9 l10">
              <span className="black-text">
                { this.state.word.deTerm }
              </span>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s2 l1">
              <img src={da} alt="denmark flag icon" className="circle responsive-img" title="Danish" />
            </div>
            <div className="col s9 l10">
              <span className="black-text">
                { this.state.word.daTerm }
              </span>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s2 l1">
              <img src={no} alt="norway flag icon" className="circle responsive-img" title="Norwegian" />
            </div>
            <div className="col s9 l10">
              <span className="black-text">
                { this.state.word.noTerm }
              </span>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s2 l1">
              <img src={sv} alt="sweden flag icon" className="circle responsive-img" title="Swedish" />
            </div>
            <div className="col s9 l10">
              <span className="black-text">
                { this.state.word.svTerm }
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
