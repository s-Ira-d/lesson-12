import React, { Component } from "react";

export class UserForm extends Component {
  state = {
    username: "",
    email: "",
  };

  componentDidMount() {
    const saveData = localStorage.getItem("user");

    if (saveData) {
      this.setState(JSON.parse);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem("user", JSON.stringify(this.state));
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email } = this.state;

    return (
      <div>
        <h1>Форма введення користувача</h1>
        <form>
          <label>
            Ім'я користувача:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div>
          <h2>Введені дані:</h2>
          <p>Ім'я користувача: {username}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    );
  }
}
