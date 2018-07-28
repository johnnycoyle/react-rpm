import React from 'react';
import './form-input.less';

export default class FormInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  
  handleTextChange = (e) => {
    const { value } = e.target;
    this.setState({value});
  }

  render() {
    return (
      <div className="input-container">
        <label>{this.props.label}</label>
        <input 
          type="text" 
          value={this.state.value} 
          placeholder={this.props.placeholder ? this.props.placeholder : null}
          onChange={this.handleTextChange}
          style={{ width: this.props.value.length * 16 + "px"}}
          />
      </div>
    );
  }
}
