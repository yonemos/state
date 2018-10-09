import React from "react";
import { render } from "react-dom";

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "unko", age: 1 };
  }
  //render()は必須
  render() {
    return (
      <h2 onClick={this.onButtonClick}>
        {this.state.name}
        {this.state.age}
      </h2>
    );
  }
  onButtonClick = () => {
    this.setState({ age: this.state.age + 1 });
  };
}

render(<Human />, document.getElementById("root"));
