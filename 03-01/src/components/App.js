import React from "react";
import List from "./List";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name: "",
      email: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formHandler = (event) => {
    event.preventDefault();

    const data = [
      ...this.state.users,
      {
        id: Date.now(),
        name: this.state.name,
        email: this.state.email,
      },
    ];

    this.setState({
      users: data,
      name: "",
      email: "",
    });
  };

  removeListItem = (id) => {
    const data = this.state.users.filter((user) => user.id !== id);
    this.setState({users: data});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <List users={this.state.users} removeUser={this.removeListItem} />
      </div>
    );
  }
}
