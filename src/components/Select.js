import React from 'react';

const languages = {
  en: 'English',
  fi: 'Finnish',
  da: 'Danish',
  de: 'German',
  sv: 'Swedish',
  no: 'Norwegian',
};

function Select({ languages }) {
  const image = `./images/flags/${language}.png`;
  return (
    <div className="row valign-wrapper" style={{ margin: 0 }}>
      <div className="col s2">
        <img align="middle" src={image} alt={language} className="circle responsive-img" title={languages[language]} />
        <input type="checkbox" />
        <span>Red</span>
      </div>

    </div>
  );
}

export default Select;