import React from 'react';
import Skills from './Skills.js'
import Projects from './Projects.js'
import skills from './data/skillData.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="top-icons">
          <img src="http://www.cashpoint.com.au/wp-content/uploads/2014/06/linkedin.png" />
          <img src="http://www.iconsfind.com/wp-content/uploads/2013/11/20131104_5277047941700.png" />
          <img src="https://seeklogo.com/images/I/instagram-logo-98138B5E5A-seeklogo.com.png" />
        </div>
        <div id="top-main">
          <h1 id="name">misha hoo</h1>
          <div id="self-photo">
          </div>
          {/* <div id="ani-wrapper">
            <div id="inner">
              <div id="animate">
                <div id="txtAniText" className="slideIn1">
                  full-stack software engineer
                </div>
              </div>
            </div>
          </div> */}
          <div className="about-info">
            <h1 id="title" className="animated animatedFadeUp fadeUp">full-stack software engineer</h1>
            <p id="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="line"></div>
        </div>
        <Skills skills={skills}/>
        <Projects />
        <div id="last">
          <h3 className="contact-headline">Contact Me!</h3>
          <img src="http://www.cashpoint.com.au/wp-content/uploads/2014/06/linkedin.png" width="65px"/>
          <img src="http://www.iconsfind.com/wp-content/uploads/2013/11/20131104_5277047941700.png" width="65px"/>
          <img src="https://seeklogo.com/images/I/instagram-logo-98138B5E5A-seeklogo.com.png" width="65px"/>
          <div className="contact-text">
            {/* <div>Misha Hoo</div> */}
            <a href="mailto:hoomisha@gmail.com" id="email">hoomisha@gmail.com</a>
          </div>
        </div>
        <div className="bar"></div>
        <div id="footer">Misha Hoo © 2017</div>
      </div>
    )
  }

}

export default Main;
