import React from 'react';
import './slide.less'

export default class Slide extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const color = this.props.color ? this.props.color : '#141414'
    return (
      <div className="carousel-slide" style={{ background: color }}>
          <div className="logo-container">
            <span className="left-logo-text" >BORN IN THE TRADES</span>
            <span className="right-logo-text">BUILT FOR THE TRADES</span>
            { this.props.children }
          </div>
      </div>
    );
  }
}
