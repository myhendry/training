import React, { Component } from "react";

class Header extends Component {
  state = {
    isActive: true
  };

  _toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <div>
        <div>
          <p>{this.state.isActive.toString()}</p>
          <button type="button" onClick={this._toggleActive}>
            Toggle
          </button>
        </div>
        <p>{this.props.company}</p>
      </div>
    );
  }
}

export default Header;
