import React, { Component } from 'react';

const Home = function () {
  return <div>Welcome to our page</div>
}

const About = function () {
  return <div>It is great here</div>
}

export class SpotCheck2 extends Component {

  //we always define state in the constructor
  constructor() {
    super()
    this.state = {
      showHome: true
    }
  }

  toggle = () => {
    this.setState({
      //here we're "flipping" the boolean of whatever is currently in state
      showHome: !this.state.showHome
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.showHome ? <Home /> : <About />}
      </div>
    )
  }
}

