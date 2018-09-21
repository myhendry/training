import React, { Component } from "react";

import MyProvider from "./context/MyProvider";

import HomePage from "./pages/HomePage";
class App extends Component {
  render() {
    return (
      <MyProvider>
        <HomePage />
      </MyProvider>
    );
  }
}
export default App;
