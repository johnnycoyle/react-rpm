import React from 'react';
import "./timeline.less";

export default class Timeline extends React.Component {

  render() {
    return (
      <div className="timeline-container">
        <div className="timeline">
          { 
            this.props.steps.map((step, i) => 
              <TimelineElement
                key={`timeline-element${i}`}
                title={step}
                index={i}
                isSelected={this.props.slideIndex === i}
                handleTimelineClick={this.props.handleTimelineClick}
              />
            )
          }
        </div>
      </div>
    )
  }
}

class TimelineElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTitleVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isTitleVisibile && !this.props.isSelected) {
      this.setState({ isTitleVisible: false});
    }
  }

  handleMouseEnter = () => {
    if (!this.state.isTitleVisible) {
      this.setState({ isTitleVisible: this.props.isSelected || true});
    }
  }

  handleMouseExit = () => {
    this.setState({ isTitleVisible: false});
  }

  render() {
    const { isSelected, index, title } = this.props;

    return (
      <div className="timeline-element">
        <div className="timeline-tick"
          onClick={() => this.props.handleTimelineClick(index) }
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseExit}
          style={ this.props.isSelected ? {width: '25px'} : {opacity: '0.6'}}
        />
        { this.props.isSelected && 
          <span className="timeline-text" style={{ width: '25px !important' }}>{this.props.title}</span> 
        }
        { !this.props.isSelected && this.state.isTitleVisible && <span className="timeline-text">{this.props.title}</span> }
      </div>
    );
  }
}