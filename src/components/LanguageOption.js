import { components } from 'react-select';
import React from 'react';

const { Option } = components;

const labelToImage = {
  English: 'en',
  Finnish: 'fi',
  Danish: 'da',
  German: 'de',
  Swedish: 'sv',
  Norwegian: 'no',
};

const LanguageOption = props => (
  <Option {...props}>
    <div className="row valign-wrapper" style={{ margin: 0, padding: 0 }}>
      <div className="col s2 l1">
        <img src={`./images/flags/${labelToImage[props.data.label]}.png`} alt={props.data.label} className="circle responsive-img" />
      </div>
      <div className="col s9 l10  offset-l1" style={{ fontSize: 'large' }}>
        { props.data.label }
      </div>
    </div>
  </Option>
);

export default LanguageOption;