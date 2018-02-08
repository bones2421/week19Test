import React from "react";


const PanelBody = (props) => {
  return (
    <div className="panel-body text-center">
      <p>Click Count: {props.count}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Increment
          </button>
      <button className="btn btn-primary" onClick={props.handleDecrement}>
        Decrement
          </button>
    </div>
  );
};



class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }
  handleDecrement = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
        <PanelBody handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
