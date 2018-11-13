import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Result from './Result';
import Suggestion from './Suggestion';
import dict from '../dict';
import words from '../words';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function lookUp({ word, language }) { // look up word(suggestion) from dict
  return dict.filter(w => w[`${language}Term`] === word)[0];
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') { // only display the first 100 words
    return words.slice(0, 100);
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');

  return words.filter(word => regex.test(word.word));
}

function getSuggestionValue(suggestion) {
  return suggestion.word;
}


function renderSuggestion(suggestion) {
  return (
    <Suggestion word={suggestion.word} language={suggestion.language} />
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
      suggestions: words,
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
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    // console.log(lookUp(suggestion));
    this.setState({
      result: lookUp(suggestion),
    });
    // console.log(suggestionValue);
  };


  render() {
    const { value, suggestions, result } = this.state;
    const inputProps = {
      placeholder: 'type',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="container">
        <div className="row">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            shouldRenderSuggestions={shouldRenderSuggestions}
            // alwaysRenderSuggestions={true}
            inputProps={inputProps}
          />

        </div>
        { result ? <Result word={result} /> : null }
        {/* <div className="container">{ result }</div> */}
      </div>
    );
  }
}

export default Dictionary;
