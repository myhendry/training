import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MyProvider from "./context/MyProvider";

import HomePage from "./pages/HomePage";
import RemotePage from "./pages/RemotePage";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/remote" component={RemotePage} />
          </div>
        </BrowserRouter>
      </MyProvider>
    );
  }
}
export default App;
