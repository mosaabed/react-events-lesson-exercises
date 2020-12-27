import React, { Component } from 'react';
import Contact from './Contact'

class List extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <div >
        {this.props.contacts.map((c, i) => <Contact key={i} name={c} displayConvo={this.props.displayConvo}/>)}
      </div>
    );
  }
}
export default List;
