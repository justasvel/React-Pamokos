import React from "react";
import List from "./List";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name: "",
      email: "",
      btn: "Submit",
      updateId: "",
      btnStatus: ''
    };
  }

  checkEmptyInputs = () => {
    if(this.state.name === '' || this.state.email === '') {
      this.setState({ btnStatus: '' });
    } else {
      this.setState({ btnStatus: 'notEmpty' });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    this.checkEmptyInputs();
  };

  formHandler = (event) => {
    event.preventDefault();

    if (this.state.btn === "Submit") {
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
        btnStatus: ''
      });
    } else if (this.state.btn === "Edit") {
      const index = this.state.users.findIndex(
        (element) => element.id === this.state.updateId
      );
      const data = [...this.state.users];
      data[index].name = this.state.name;
      data[index].email = this.state.email;

      this.setState({
        users: data,
        name: "",
        email: "",
        btn: "Submit",
        btnStatus: ''
      });
    }

  };

  removeListItem = (id) => {
    const data = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: data });
  };

  editListItem = (user) => {
    this.setState({
      btn: "Edit",
      name: user.name,
      email: user.email,
      updateId: user.id,
    });
  };

  render() {
    return (
      <div className="d-flex">
        <form onSubmit={this.formHandler} className="w-25 m-5">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value={this.state.btn}
            className="btn btn-primary my-3"
            disabled={!this.state.btnStatus}
          />
        </form>
        <List
          users={this.state.users}
          removeUser={this.removeListItem}
          editUser={this.editListItem}
        />
      </div>
    );
  }
}
