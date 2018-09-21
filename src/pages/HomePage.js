import React, { Component } from "react";

import { MyContext } from "../context/MyProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

class HomePage extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <Header company="Bulbtech" />
              <p>HomePage</p>
              <div>
                <p>Connected? {context.state.isConnected.toString()}</p>
                <button type="button" onClick={context.setConnection}>
                  Toggle Connection
                </button>
              </div>
              <Footer author="Hendry" />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
export default HomePage;
