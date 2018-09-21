import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header company="Bulbtech" />
        <p>HomePage</p>
        <Footer author="Hendry" />
      </div>
    );
  }
}
export default HomePage;
