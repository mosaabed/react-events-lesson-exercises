import React, { Component } from 'react';

class Conversation extends Component {
  resetConvo = () => {
    this.props.resetConvo()
  }
  
  render() {
    return (
      <div >
        {this.props.convo.map((c, i) => {
          return (<div key={i}><span className="sender">{c.sender === 'self' ? 'Me' : this.props.sender}:</span><span>{c.text}</span></div>)
        })}
        <button className="back" onClick={this.resetConvo}>Back</button></div>
    );
  }
}

export default Conversation;
