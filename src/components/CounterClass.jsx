import React, { Component } from "react";

class CounterClass extends Component {
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <section>
        {this.state.counter}
        <div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </section>
    );
  }
}

export default CounterClass;