import React from "react";
import { Redirect } from "react-router-dom";
import { AuthConsumer } from "../../context/Auth";

//HOC that will redirect the user to the home page if they are on a page not relevant to signed in users
//the main purpose of this component is to redirect the user to home page after login
export default function mustBeLoggedOut(WrappedComponent) {
  class ProtectedComponent extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {({ isLoggedIn }) => (
            <>
              {!isLoggedIn && <WrappedComponent {...this.props} />}
              {isLoggedIn && <Redirect to="/home" />}
            </>
          )}
        </AuthConsumer>
      );
    }
  }

  return ProtectedComponent;
}
