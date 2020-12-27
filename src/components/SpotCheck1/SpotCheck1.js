import React, { Component } from 'react';

class SpotCheck1 extends Component {

    logClick() {
      console.log("I was clicked!")
    }
  
    logHover() {
      console.log("I was hovered!")
    }
  
    render() {
      return (
        <button
          onClick={this.logClick}
          onMouseEnter={this.logHover}>Click me</button>
      );
    }
  }

export default SpotCheck1;
