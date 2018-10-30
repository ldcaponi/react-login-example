import React from "react";
import "./Login.scss";

class Login extends React.Component {
  state = { email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <form className="LoginForm">
          <h1 className="LoginForm__heading">Login</h1>
          <div className="LoginForm__group">
            <input
              className="LoginForm__text-input"
              value={email}
              id="email"
              name="email"
              type="text"
              placeholder="abc@123.com"
              onChange={this.handleChange}
            />
            <label className="LoginForm__label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="LoginForm__group">
            <input
              className="LoginForm__text-input"
              value={password}
              id="password"
              name="password"
              type="password"
              placeholder="ABC123"
              onChange={this.handleChange}
            />
            <label className="LoginForm__label" htmlFor="password">
              Password
            </label>
          </div>

          <div className="LoginForm__group">
            <button className="LoginForm__submit-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
