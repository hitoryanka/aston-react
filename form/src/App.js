import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { inputValue: "", isDisabled: false };
  }

  componentDidMount = () => {
    console.log("Component Mounted");
  };

  shouldComponentUpdate = (_, nextState) => {
    console.log(
      'shouldComponentUpdate will not allow you to write "реакт2", by returning false'
    );

    if (nextState.inputValue.includes("реакт2")) {
      return false;
    }

    return true;
  };

  componentDidUpdate = () => {
    console.log("Component updated (not called for initial render)");
  };

  componentWillUnmount = () => {
    console.log("Component will UNMOUNT in one moment");
  };

  onChange = ({ target: { value } }) => {
    if (value.includes("реакт")) {
      this.setState({ inputValue: value, isDisabled: true });
      return;
    }

    this.setState({ inputValue: value, isDisabled: false });
  };

  onClickFocus = (event) => {
    event.preventDefault();
    document.querySelector("#focus-me").focus();
  };

  render() {
    return (
      <form>
        <input
          id="focus-me"
          onChange={this.onChange}
          placeholder="Start typing"
          value={this.state.inputValue}
        />
        <br />
        <button disabled={this.state.isDisabled}>Отправить</button>
        <br />
        <button onClick={this.onClickFocus}>focus on the input</button>
      </form>
    );
  }
}

export default App;
