import React from 'react';
import './welcome-page.less';

import { Transition, Icon } from 'semantic-ui-react'

export default class WelcomePage extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
        this.props.shouldDisplay ? (
        <div className='main-container-welcome'>
          <div className="logo-container">
            <span className="left-logo-text" >BORN IN THE TRADES</span>
            <img className='logo-fade-in' src={require('./../assets/st_full_logo_white.png')}/>
            <img className='logo-fade-out-black' src={require('./../assets/st_full_logo.png')}/>
            <span className="right-logo-text">BUILT FOR THE TRADES</span>
          </div>
          <div className="dark-layover"/>
          <div className="welcome-text-container">
            <h1>Welcome to ServiceTitan</h1>
          </div>
          <div className="play-button-container">
            <div className="play-button-echo-A"/>
            <div className="play-button-echo-B"/>
            <div className="play-button">
              <Icon className="play-button-icon" name="play" size="large" color="blue"/>
            </div>
          </div>
          <div className="video-blue-overlay"/>
          <div className="video-container">
            <div className="video-mask"/>
            <video id="background-video" autoPlay loop muted>
              <source src={require('./../assets/home_introduction_video.mp4')} type="video/mp4" />
          </video>
          </div>

        </div>
        ): null 
    );
  }
}