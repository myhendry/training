import React, { Component } from "react";
export const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    isConnected: false
  };
  _setConnection = () => {
    this.setState({
      isConnected: !this.state.isConnected
    });
  };
  render() {
    return (
      <MyContext.Provider
        value={{ state: this.state, setConnection: this._setConnection }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
