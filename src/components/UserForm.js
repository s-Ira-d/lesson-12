import React, { Component } from "react";
import styles from "./UserForm.module.css";

export class UserForm extends Component {
  state = {
    username: "",
    email: "",
    phone: "",
    error: "",
    users: [],
  };

  componentDidMount() {
    const saveData = localStorage.getItem("user");

    if (saveData) {
      this.setState(JSON.parse(saveData));
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
      error: "",
    });
  };

  handleSave = (e) => {
    e.preventDefault();

    const { username, email, phone } = this.state;

    if (!username || !email || !phone) {
      this.setState({
        error: "Усі поля мають бути заповнені!",
      });
      return;
    }

    alert("Дані успішно збережено!");
  };

  handleClear = () => {
    this.setState({
      username: "",
      email: "",
      phone: "",
      error: "",
    });

    localStorage.removeItem("user");
  };

  addUsers = (e) => {
    e.preventDefault();

    const { username, email, phone } = this.state;

    if (!username || !email || !phone) {
      alert("Не всі поля заповнені!");
      return;
    }

    const newUser = {
      username,
      email,
      phone,
    };

    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
      username: "",
      email: "",
      phone: "",
    }));
  };

  handleDelete = (indexToDelete) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((_, index) => index !== indexToDelete),
    }));
  };

  render() {
    const { username, email, phone, error, users } = this.state;

    return (
      <div className={styles.container}>
        <h1>Форма користувача</h1>

        <form onSubmit={this.handleSave} className={styles.form}>
          <label>
            Ім'я
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Телефон
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.save} type="submit">
            Зберегти
          </button>
        </form>

        <div className={styles.buttons}>
          <button className={styles.clear} onClick={this.handleClear}>
            Очистити
          </button>

          <button className={styles.add} onClick={this.addUsers}>
            Додати
          </button>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <h2>Користувачі</h2>

        {users.length === 0 ? (
          <p>Немає користувачів</p>
        ) : (
          <ul className={styles.list}>
            {users.map((user, index) => (
              <li key={index} className={styles.item}>
                <p>
                  <b>Ім'я:</b> {user.username}
                </p>
                <p>
                  <b>Email:</b> {user.email}
                </p>
                <p>
                  <b>Телефон:</b> {user.phone}
                </p>

                <button
                  className={styles.delete}
                  onClick={() => this.handleDelete(index)}
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
