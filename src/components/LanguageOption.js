import { components } from 'react-select';
import React from 'react';

const { Option } = components;
const image = './images/flags/en.png';

const LanguageOption = props => (
  <Option {...props}>
    <img src={image} />
    {props.data.label}
  </Option>
);

export default LanguageOption;