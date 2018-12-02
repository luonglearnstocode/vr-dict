import React from 'react';

const labelToLanguage = {
  en: 'English',
  fi: 'Finnish',
  da: 'Danish',
  de: 'German',
  sv: 'Swedish',
  no: 'Norwegian',
};


const MultiValueLabel = props => (
  <div>
    <img src={`./images/flags/${props.data.label}.png`} alt={props.data.label} title={labelToLanguage[props.data.label]} className="circle" width="30vw" />
  </div>
);

export default MultiValueLabel;
