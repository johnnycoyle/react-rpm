/* es-lint disable */

import React, { Component } from 'react';
import * as Styles from './app.less';
import Carousel from 'nuka-carousel';
import Slide from './../components/slide';
import Timeline from './../components/timeline';
import WelcomePage from './../components/welcome-page';
import NavigationButtons from './../components/lets-get-started-button';
import HorizontalCarousel from './../components/horizontal-carousel';

class App extends Component {

  constructor(props) {
    super(props);
    const steps = [
        'welcome',
        'intro',
        'company profile',
        'business Units',
        'employees',
        'technicians',
        'final Steps'
    ]

    this.state = {
      slideIndex: 0,
      welcomeIsCompleted: false,
      steps,
      introductionComplete: false
    }

    this.nextButtonControls;
    this.previousButtonControls;

    this.hasMounted = false;
  }

  componentDidMount() {
    this.hasMounted = true;
  }

  triggerIntroductionCompletion = () => {
    this.setState({ introductionComplete: true })
  }
  setNextControls = (previous, next) => {
    this.nextButtonControls = next;
    this.previousButtonControls = previous;
  }

  handleTimelineClick = (index) => {
    this.setState({ slideIndex: index});
  }

  render() {

    const { slideIndex } = this.state;

    return (
      <div className="main-container">
        { 
          slideIndex !== 0 &&
            <img className="logo" src={require("./../assets/st_full_logo_white.png")}/>
        }
        <Timeline
            steps={this.state.steps}
            slideIndex={this.state.slideIndex}
            handleTimelineClick={this.handleTimelineClick}
        />
        <Carousel
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => 
            this.setState({
              welcomeIsCompleted: this.state.welcomeIsCompleted || slideIndex === 0,
              slideIndex 
            })
          }
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          renderBottomRightControls={({ previousSlide, nextSlide }) => {
            this.setNextControls(previousSlide, nextSlide);
            return (
              <NavigationButtons 
                text={ this.state.slideIndex === 0 ? 'Let\'s get started' : null}
                showPrevious={ this.state.slideIndex > 0}
                onClick={{previousSlide, nextSlide}}
              />
          )}}
          vertical={true}
          speed={750}
        >
          <WelcomePage 
            shouldDisplay={this.hasMounted || this.state.slideIndex === 0}
            textHeader={"Welcome"}
            textSubHeader={"Let's get you set up!"}
          />
          <Slide content="Slide 1" color="rgba(34, 112, 238, 1)">
            <HorizontalCarousel
              active={this.state.slideIndex === 1}
              triggerIntroductionCompletion={this.triggerIntroductionCompletion}
              introductionComplete={this.state.introductionComplete}
            />
          </Slide>
          <Slide content="Slide 3" color="#FFB2A0"/>
          <Slide content="Slide 3" color="#BF2A00"/>
          <Slide content="Slide 3" color="#10864B"/>
          <Slide content="Slide 5" color="#FFBE00"/>
          <Slide content="Slide 3" color="#422799"/>
          <Slide content="Slide 3"/>
        </Carousel>
      </div> 
    );
  }
}




export default App;
