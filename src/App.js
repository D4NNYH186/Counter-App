import React, { Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    counter: 0,
  }
  increment = () => {
    this.setState({
      counter:this.state.counter + 1
    });
  }
  decrement = () => {
    if(this.state.counter <= 0){
      this.setState({
          counter:0
      });
    }else {
      this.setState({
          counter: this.state.counter - 1
      });
    }
  }

  render() {
    return( 
      <div>
      <h1>______________________</h1>
      <h1>{this.state.counter}</h1>
      <button className="button" onClick={this.increment}>Increment</button>
      
      <button className="button" onClick={this.decrement}>Decrement</button>
      
      </div>
    )
}
}


export default App;
