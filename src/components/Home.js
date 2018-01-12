/* eslint-disable no-mixed-operators,no-undef,class-methods-use-this,no-param-reassign,no-multi-assign */
import React, { Component } from 'react';


class Home extends Component {


  componentDidMount() {
    const intro = document.getElementById('intro');
    setTimeout(this.introAnimateEnter.bind(this, intro), 1000);
  }

  introAnimateEnter(intro) {
    intro.style.fontSize = '60px';
    setTimeout(this.introAnimateExit.bind(this, intro), 3000);
  }

  introAnimateExit(intro) {
    intro.style.left = '1500px';
  }

  render() {
    return (
      <div id="intro" className="intro">
        <div>Welcome to the website of Zachary Pelkey</div>
      </div>
    );
  }
}

export default Home;
