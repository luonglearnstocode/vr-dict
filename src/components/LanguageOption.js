import { components } from 'react-select';
import React from 'react';

const { Option } = components;

const labelToLanguage = {
  en: 'English',
  fi: 'Finnish',
  da: 'Danish',
  de: 'German',
  sv: 'Swedish',
  no: 'Norwegian',
};


const LanguageOption = props => (
  <Option {...props}>
    <div className="row valign-wrapper" style={{ margin: 0, padding: 0 }}>
      <div className="col s2 l1">
        <img src={`./images/flags/${props.data.label}.png`} alt={props.data.label} className="circle responsive-img" />
      </div>
      <div className="col s9 l10  offset-l1" style={{ fontSize: 'large' }}>
        { labelToLanguage[props.data.label] }
      </div>
    </div>
  </Option>
);

export default LanguageOption;
