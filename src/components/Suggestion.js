import React from 'react';
import PropTypes from 'prop-types';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';


function Suggestion({ word, language, query }) {
  const image = `./images/flags/${language}.png`;
  // https://github.com/moroshko/autosuggest-highlight#examples
  const matches = AutosuggestHighlightMatch(word, query);
  const parts = AutosuggestHighlightParse(word, matches);

  return (
    <div className="row valign-wrapper" style={{ margin: 0, padding: 0 }}>
      <div className="col s2 l1">
        <img src={image} alt={language} className="circle responsive-img" />
      </div>
      <div className="col s9 l10  offset-l1" style={{ fontSize: 'large' }}>
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'red-text' : 'black-text';
            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
      </div>
    </div>
  );
}

Suggestion.propTypes = {
  word: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Suggestion;
