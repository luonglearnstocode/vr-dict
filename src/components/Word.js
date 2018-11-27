import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Listen from './Listen';

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
    <div className="row valign-wrapper" style={{ margin: 0 }}>
      <div className="col s2 l1 offset-l1">
        <img align="middle" src={image} alt={language} className="circle responsive-img" title={languages[language]} />
      </div>
      <div className="col s6 l8 offset-l1">
        <h4 className="flow-text">{ word }</h4>
        <blockquote>
          { usageNote }
        </blockquote>
      </div>
      <div className="col s2 l1">
        <CopyToClipboard text={word}>
          <button type="submit" className="btn-flat" title="copy to clipboard">
            <i className="material-icons">content_copy</i>
          </button>
        </CopyToClipboard>
      </div>
      <div className="col s2 l1">
        <Listen word={word} language={language} />
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
