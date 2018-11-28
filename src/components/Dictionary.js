import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Result from './Result';
import Suggestion from './Suggestion';
import dict from '../dict';
import words from '../words';
import Select from 'react-select';
// import Select from 'react-select-plus';
import LanguageOption from './LanguageOption';

const options = [
  { value: 'en', label: 'English' },
  { value: 'fi', label: 'Finnish' },
  { value: 'de', label: 'German' },
  { value: 'no', label: 'Norwegian' },
  { value: 'sv', label: 'Swedish' },
  { value: 'da', label: 'Danish' },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function lookUp({ word, language }) { // look up word(suggestion) from dict
  const result = dict.filter(w => w[`${language}Term`] === word)[0];
  result.fromLanguage = language;
  return result;
}

function getSuggestionValue(suggestion) {
  return suggestion.word;
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  // const escapedValue = value.trim();

  if (escapedValue === '') { // not display suggestions when input is blank
    return [];
  }

  // match words in the middle of the string
  // https://stackoverflow.com/questions/3507453/regex-match-for-beginning-of-multiple-words-in-string
  const regex = new RegExp(`\\s(${escapedValue}[^\\s]*)|^(${escapedValue}[^\\s]*)`, 'i');

  return words.filter(word => regex.test(getSuggestionValue(word)));
}

function renderSuggestion(suggestion, { query }) {
  return (
    <Suggestion word={suggestion.word} language={suggestion.language} query={query} />
  );
}

function shouldRenderSuggestions(value) {
  return value.trim().length >= 0;
}

class Dictionary extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      result: '',
      suggestions: getSuggestions(''),
      selectedLanguages: [ // default languages
        { value: 'en', label: 'English' },
        { value: 'fi', label: 'Finnish' },
      ],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      result: '',
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: getSuggestions(''),
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    // console.log(lookUp(suggestion));
    this.setState({
      result: lookUp(suggestion),
      value: '', // clear input field after selected

    });
  };

  handleSelect = (selectedOption) => {
    this.setState({ selectedLanguages: selectedOption });
    // console.log(selectedOption);
  }

  render() {
    const {
      value, suggestions, result, selectedLanguages,
    } = this.state;

    const inputProps = {
      placeholder: 'type',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="container">
        <div className="row suggest">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            shouldRenderSuggestions={shouldRenderSuggestions}
            focusInputOnSuggestionClick={false}
            // alwaysRenderSuggestions={true}
            inputProps={inputProps}
          />
        </div>
        <div className="row select">
          <Select
            value={selectedLanguages}
            onChange={this.handleSelect}
            options={options}
            components={{ Option: LanguageOption }}
            isMulti
            closeMenuOnSelect={false}
            blurInputOnSelect={false}
          />
        </div>
        {/* <div>
          <label>
            <input type="checkbox"  />
            <span>Filled in</span>
          </label>
        </div> */}
        { result ? <Result word={result} languages={selectedLanguages} /> : null }
      </div>
    );
  }
}

export default Dictionary;
