import React from 'react';
import './lets-get-started-button-styles.less'
import { Icon } from 'semantic-ui-react';

const NavigationButtons = ({ onClick, text, showPrevious }) => {
  return (
    <div className="nav-button-container">
      {
        showPrevious ? (
                <button className="nav-button-prev" onClick={onClick.previousSlide}>
                  <Icon name="chevron up"/>
                </button>
        ) : null
      }
      <span>{text}</span>
      <button className="nav-button-next" onClick={onClick.nextSlide}>
        <Icon name="chevron down"/>
      </button>
    </div>
  );
}

export default NavigationButtons;