import React from "react";
import { Redirect } from "react-router-dom";
import { AuthConsumer } from "../../context/Auth";

//HOC that will redirect the user from visiting a page if they are not logged in
export default function mustBeLoggedIn(WrappedComponent) {
  class ProtectedComponent extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {({ isLoggedIn }) => (
            <>
              {isLoggedIn && <WrappedComponent {...this.props} />}
              {!isLoggedIn && <Redirect to="/login" />}
            </>
          )}
        </AuthConsumer>
      );
    }
  }

  return ProtectedComponent;
}
