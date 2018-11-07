import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import dict from '../dict';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return dict;
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');

  return dict.filter(word => regex.test(word.fiTerm));
}

function getSuggestionValue(suggestion) {
  return suggestion.fiTerm;
}

function renderSuggestion(suggestion) {
  return (
    <div className="card">
      <span className="right">{suggestion.RailLexicID}</span>
      <span>{suggestion.fiTerm}</span>
    </div>
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
      suggestions: dict,
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
    this.setState({
      result: suggestion.fiTerm,
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
        <div className="card">{ result }</div>
      </div>
    );
  }
}

export default Dictionary;
