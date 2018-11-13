import React, { Component } from 'react';
// import en from '../images/flags/en.png';
// import de from '../images/flags/de.png';
// import da from '../images/flags/da.png';
// import fi from '../images/flags/fi.png';
// import no from '../images/flags/no.png';
// import sv from '../images/flags/sv.png';
import '../index.css';
import Word from './Word';

const languages = ['fi', 'en', 'de', 'sv', 'no', 'da'];

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
    const { word } = this.state;
    const meanings = (
      <ul>
        {languages
          .filter(language => `${language}Term` in word) // if dict has translation to this word
          .map(language => <li key={language}><Word language={language} word={word[`${language}Term`]} usageNote={word[`${language}UsageNote`]} /></li>)}
      </ul>
    );

    return (
      <div className="result-box">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card-panel grey lighten-5 z-depth-1">
            {meanings}
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
