import React, { Component } from 'react';





class SpotCheck3 extends Component {
    constructor() {
        super()
        this.state = {
            quotes: [
                { id: "3bf00g", text: "Friends are like butter, always wrapped up in their own thing", likes: 24 },
                { id: "50xx11", text: "If you're going to walk in the rain, at least make sure it's raining", likes: 82 },
                { id: "50ggr2", text: "Don't stop climbing the mountain. Instead, keep climbing the mountain.", likes: 33 }
            ]
        }
    }

    //write a likeQuote method that increase the likes of the first quote 

    render() {
        return (
            <div>
                {this.state.quotes.map(q => {
                    return (
                        <div key={q.id} className="quotes">
                            <sup>{q.likes}</sup>
                            <span onClick={this.likeQuote}>+</span>
                            <span>{q.text}</span>
                            <div id="container"></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}



class Bank extends React.Component{
    constructor(){
      super();
      this.state = {
        availableCash: 100000,
        vipClients: ["Trisha", "Kareem", "Melanie", "Anish"]
      }
    }
  
    doubleMoney = () =>{
      //Here it's okay to access state directly as we modify it
        //This is *not* the same as modifying state directly
        //i.e. it's not this.state.availableCash = this.state.availableCash * 2
      this.setState({
        availableCash: this.state.availableCash * 2
      })
    }
    
    removeVIP = () =>{
      //Here we must use the spread operator
      //If we don't, then currentVIPs will just be a reference to this.state.vipClients
      //And since currentVIPs.pop() is the same as this.state.vipClients.pop() - it's not allowed
      let currentVIPs = [...this.state.vipClients]
      currentVIPs.pop()
      this.setState({
        vipClients: currentVIPs
      })
    }
    
    showStatus = () => {
      console.log(this.state.availableCash)
      console.log(this.state.vipClients)
    }
    
    render(){
      return(<div>
        <button onClick={this.doubleMoney}>Add Money</button>
        <button onClick={this.removeVIP}>Remove VIP</button>
        <button onClick={this.showStatus}>Show</button>
      </div>)
    }
  }
  


  //ReactDOM.render(<Bank />, document.getElementById("container"));
  



export default SpotCheck3;
