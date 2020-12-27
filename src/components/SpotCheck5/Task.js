import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.task.text)
  }

  render() {
    return <div>{this.props.task.text} - <button onClick={this.complete}>Complete</button></div>
  }
}


export default Task;
