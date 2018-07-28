import React from 'react';

export default FormInput= (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" value={props.value ? props.value : null} placeholder={props.placeholder ? props.placeholder : null}/>
    </div>
  );
}