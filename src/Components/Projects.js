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
        showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="carousel-box">
          <div className="project-info">
            <div className="project-gif">
              <img className="project-gif-image"src="https://media1.giphy.com/avatars/100soft/WahNEDdlGjRZ.gif"></img>
            </div>
            <div className="project-description">
              <h3 className="project-title" >Project Title</h3>
              <p className="project-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>
          </div>
          {/* <img src="./assets/background2.jpg"></img> */}
          {/* <p className="legend">Project 1</p> */}
        </div>
        <div className="carousel-box">
          <div className="project-info">
            <div className="project-gif">
              <img className="project-gif-image"src="https://media1.giphy.com/avatars/100soft/WahNEDdlGjRZ.gif"></img>
            </div>
            <div className="project-description">
              <h3 className="project-title" >Project Title</h3>
              <p className="project-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>
          </div>
          {/* <img src="./assets/background2.jpg"></img> */}
          {/* <p className="legend">Project 2</p> */}
        </div>
        <div className="carousel-box">
          <div className="project-info">
            <div className="project-gif">
              <img className="project-gif-image"src="https://media1.giphy.com/avatars/100soft/WahNEDdlGjRZ.gif"></img>
            </div>
            <div className="project-description">
              <h3 className="project-title" >Project Title</h3>
              <p className="project-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>
          </div>
          {/* <img src="./assets/background2.jpg"></img> */}
          {/* <p className="legend">Project 3</p> */}
        </div>
      </Carousel>
    )
  }

}

export default Projects;
