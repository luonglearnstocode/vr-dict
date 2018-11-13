import React from 'react';
import PropTypes from 'prop-types';

function Suggestion(props) {
  const { word, language } = props;
  const image = `/images/flags/${language}.png`;
  return (
    <div className="row valign-wrapper">
      <div className="col s2 l1">
        <img src={image} alt={language} className="circle responsive-img" title={language} />
      </div>
      <div className="col s9 l10">
        <span className="black-text">
          { word }
        </span>
      </div>
    </div>
  );
}

Suggestion.propTypes = {
  word: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Suggestion;
