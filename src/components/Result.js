import React, { Component } from 'react';
// import en from '../images/flags/en.png';
// import de from '../images/flags/de.png';
// import da from '../images/flags/da.png';
// import fi from '../images/flags/fi.png';
// import no from '../images/flags/no.png';
// import sv from '../images/flags/sv.png';
import '../index.css';
import Word from './Word';

// const languages = ['fi', 'en', 'de', 'sv', 'no', 'da'];

class Result extends Component {
  constructor({ word, languages }) {
    super();
    this.state = { word, languages };
  }

  componentWillReceiveProps({ word, languages }) {
    this.setState({ ...this.state, word, languages });
  }

  render() {
    const { word, languages } = this.state;

    const translations = (
      <ul>
        {languages
          .filter(language => language.value !== word.fromLanguage && `${language.value}Term` in word) // if dict has translation to this word
          .map(language => <li key={language.value}><Word language={language.value} word={word[`${language.value}Term`]} usageNote={word[`${language.value}UsageNote`]} /></li>)}
      </ul>
    );
    // console.log(translations);

    return (
      <div className="result-box">
        <div className="col s12">
          <div className="grey lighten-2 z-depth-1">
            <Word language={word.fromLanguage} word={word[`${word.fromLanguage}Term`]} usageNote={word[`${word.fromLanguage}UsageNote`]} />
          </div>
          <div className="grey lighten-4 z-depth-1">
            {translations}
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
