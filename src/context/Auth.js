import React from "react";
import { login } from "../services/AuthService";
import {
  setToken,
  getToken,
  getDecodedToken,
  destroyToken
} from "../services/Storage";

//creating a context to store login state information
//could use redux for this, but context is fine
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { isLoggedIn: false, loginLoading: false, loginError: "", name: "" };

  componentDidMount() {
    const token = getToken();
    if (token) {
      //user is already logged in -- found token in local storage
      //now login state will persist through browser refreshes
      this.handleSuccess(token);
    }
  }

  loginFromContext = (email, password) => {
    //set loading to true, try to login
    this.setState({ loginLoading: true });

    //simulate http login
    login(email, password)
      .then(({ token }) => this.handleSuccess(token))
      .catch(this.handleError);
  };

  logoutFromContext = () => {
    destroyToken();
    this.setState({
      isLoggedIn: false,
      name: ""
    });
  };

  handleSuccess = token => {
    //save token to localStorage
    setToken(token);
    const decoded = getDecodedToken();

    //set context state
    this.setState({
      loginLoading: false,
      isLoggedIn: true,
      name: decoded.name,
      loginError: ""
    });
  };

  handleError = e => {
    this.setState({
      loginLoading: false,
      isLoggedIn: false,
      name: "",
      loginError: e
    });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.loginFromContext,
          logout: this.logoutFromContext,
          ...this.state
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
