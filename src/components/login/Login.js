import React from "react";
import { AuthConsumer } from "../../context/Auth";
import "./Login.scss";

class Login extends React.Component {
  state = { email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e, loginFn) => {
    const { email, password } = this.state;
    e.preventDefault();
    e.stopPropagation();
    loginFn(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <AuthConsumer>
        {({ login, loginLoading, loginError }) => (
          <div className="Login">
            <form className="LoginForm" onSubmit={e => this.submit(e, login)}>
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

              {!loginLoading && (
                <div className="LoginForm__group">
                  <button className="LoginForm__submit-button" type="submit">
                    Login
                  </button>
                </div>
              )}

              {loginLoading && (
                <div className="LoginForm__group">
                  <div className="LoginForm__loading-text">Logging In...</div>
                </div>
              )}
              {loginError &&
                !loginLoading && (
                  <div className="LoginForm__group">
                    <div className="LoginForm__error-text">{loginError}</div>
                  </div>
                )}
            </form>
          </div>
        )}
      </AuthConsumer>
    );
  }
}

export default Login;
