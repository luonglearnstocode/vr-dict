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
  }

  componentWillReceiveProps({ word }) {
    this.setState({ ...this.state, word });
  }

  render() {
    const { word } = this.state;

    const translations = (
      <ul>
        {languages
          .filter(language => language !== word.fromLanguage && `${language}Term` in word) // if dict has translation to this word
          .map(language => <li key={language}><Word language={language} word={word[`${language}Term`]} usageNote={word[`${language}UsageNote`]} /></li>)}
      </ul>
    );

    return (
      <div className="result-box">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card-panel grey lighten-2 z-depth-1">
            <Word language={word.fromLanguage} word={word[`${word.fromLanguage}Term`]} usageNote={word[`${word.fromLanguage}UsageNote`]} />
          </div>
          <div className="card-panel grey lighten-4 z-depth-1">
            {translations}
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
