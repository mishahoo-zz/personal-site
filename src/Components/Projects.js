import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel
        showThumbs={false}
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="carousel-box">
          <img src="./assets/background.jpg"></img>
          <p className="legend">Project 1</p>
        </div>
        <div className="carousel-box">
          <img src="./assets/background.jpg"></img>
          <p className="legend">Project 2</p>
        </div>
        <div className="carousel-box">
          <img src="./assets/background.jpg"></img>
          <p className="legend">Project 3</p>
        </div>
      </Carousel>
    )
  }

}

export default Projects;
