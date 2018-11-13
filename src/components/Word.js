import React from 'react';
import PropTypes from 'prop-types';

const languages = {
  en: 'English',
  fi: 'Finnish',
  da: 'Danish',
  de: 'German',
  sv: 'Swedish',
  no: 'Norwegian',
};

function Word({ language, word, usageNote }) {
  const image = `./images/flags/${language}.png`;
  return (
    <div className="row valign-wrapper">
      <div className="col s2 l1">
        <img src={image} alt={language} className="circle responsive-img" title={languages[language]} />
      </div>
      <div className="col s9 l10">
        <h5>{ word }</h5>
        <blockquote>
          { usageNote }
        </blockquote>
      </div>
    </div>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  usageNote: PropTypes.string,
};

Word.defaultProps = {
  usageNote: '',
};

export default Word;
