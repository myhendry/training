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
      <div style={{ display: "flex", height: 80, backgroundColor: "teal", alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <p
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "bold",
              fontStyle: "italic"
            }}
          >
            {this.props.company}
          </p>
        </div>
        <div>
          <button type="button" onClick={this._toggleActive}>
            Toggle
          </button>
          <p>{this.state.isActive.toString()}</p>
        </div>
      </div>
    );
  }
}

export default Header;
