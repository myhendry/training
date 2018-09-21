import React, { Component } from "react";

import MyProvider from "./context/MyProvider";

import HomePage from "./pages/HomePage";
import RemotePage from "./pages/RemotePage";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <RemotePage />
      </MyProvider>
    );
  }
}
export default App;
