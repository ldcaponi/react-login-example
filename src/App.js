import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Public from "./components/public/Public";
import Navbar from "./components/navbar/Navbar";
import { AuthConsumer } from "./context/Auth";
import mustBeLoggedIn from "./components/hoc/mustBeLoggedIn";
import mustBeLoggedOut from "./components/hoc/mustBeLoggedOut";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <AuthConsumer>{state => <Navbar {...state} />}</AuthConsumer>

            <Route exact path="/" component={Public} />
            <Route exact path="/home" component={mustBeLoggedIn(Home)} />
            <Route exact path="/login" component={mustBeLoggedOut(Login)} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
