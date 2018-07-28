import React from 'react';
import Slider from 'react-slick';
import './horizontal-carousel.less';
import FormInput from './FormInput';
import UploadImage from './upload-image';
import { Transition } from 'semantic-ui-react';

export default class HorizontalCarousel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      autoplay: false,
      slideIndex: 0,
      userActionRequired: false
    }
    this.slideGoTo = null;
    this.basicInfoConfirmed = false;
  }

  componentWillReceiveProps(oldProps, newProps) {
    this.setState({ autoplay: true });
  }

  checkForUserInputToggle = () => {
    const { slideIndex } = this.state;
    if (slideIndex === 2) {
      setTimeout(() => { this.setState({ userActionRequired: true, slideIndex: 0}) }, 3000);
    }
  }

  updateSlideIndex = (e) => {
    const { slideIndex } = this.state;
    if (slideIndex + 1 === 2) {
      setTimeout(() => this.setState({ userActionRequired: true, autoplay: false}), 5000) && triggerIntroductionCompletion();
    }
    this.setState({ slideIndex: e})
  }

  checkForBasicInfoCompletion = (slide) => {
    if (slide === 2) { 
      this.basicInfoConfirmed = true;
    }
  }


  renderIntro = () => {
    const settings = {
        autoplay: this.state.autoplay,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoPlaySpeed: 4000,
        lazyLoad: true,
        draggable: false,
        pauseOnHover: false,
        touchMove: false,
        swipe: false,
        afterChange: (e) => this.updateSlideIndex(e)
    };
    return (
      <Slider {...settings}>
        <div className="slide"><h3>Let's get to know each other a bit.</h3></div>
        <div className="slide"><h3>Over the next few minutes we'll be putting together your account basics</h3></div>
        <div className="slide"><h3>Let's begin! <br/>First we need to confirm a few things</h3></div>
      </Slider>
    );
  }

  renderCompanyProfileSlider = () => {
      const settings = {
        autoplay: false,
        dots: true,
        infinite: false,
        speed: 500,
        draggable: false,
        pauseOnHover: false,
        touchMove: false,
        goToSlide: goToSlide => goToSlide(0),
        swipe: false,
        nextArrow: <ConfirmButton label="Look's good"/>,
        afterChange: (e) => this.checkForBasicInfoCompletion(e)

    };
    const form1 = [
      { label: 'Company', value: 'WyattWorks Plumbing'},
      { label: 'Phone', value: '(216) 302-3400'},
      { label: 'Address', value: '1372 Lloyd Rd, Wickliffe, OH 44092'}
    ];

    const form2 = [
      { label: 'Company', value: 'Hackathon Plumbing'},
      { label: 'Phone', value: '(310) 555.5555'},
      { label: 'Address', value: '801 N. Brand Ave, Ste 800 Glendale CA, 91203'}
    ]

    return(
      <Slider {...settings} key={Math.random()}
      >
        
        <div className="slide">
          <h3>Does this look right?</h3>
          {
            form1.map((data, i) => 
              <FormInput key={`formInput${i}`} label={data.label} value={data.value}/>
            )
          }
        </div>
        <div className="slide">
          <h3>Great. I see you also have a second location</h3>
          {
            form2.map((data, i) => 
              <FormInput key={`formInput${i}`} label={data.label} value={data.value}/>
            )
          }
        </div>
        <div>That's all for now ¯\_(ツ)_/¯</div>
      </Slider>
    );
  }

  render() {
    return(
      <div className="hor-carousel-container">
        { this.props.active || this.basicInfoConfirmed ?
          this.state.userActionRequired || this.props.introductionIsComplete
            ? this.renderCompanyProfileSlider()
              : this.renderIntro()
          : null
        }
      </div>
    );
  }
}

const ConfirmButton = (props) => {
  return(
    <button onClick={props.onClick} className="confirm-button">{props.label}</button>
  )
} 