import React, { Component } from "react";

class RemotePage extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this._fetchPost();
  }

  _fetchPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const users = await res.json();
    console.log(users);
    this.setState({
      users
    });
  };

  render() {
    return (
      <div>
        {this.state.users.map(x => (
          <div>
            <p>
              {x.username} {x.company.name} {x.address.street}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default RemotePage;
