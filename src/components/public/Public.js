import React from "react";
import { Link } from "react-router-dom";
import "./Public.scss";

const Public = props => {
  return (
    <div className="Public">
      <div className="CenterBox">
        <h1 className="Public__heading">Welcome to our site!</h1>
        <p className="Public__paragraph">
          Please <Link to="/login">log in</Link> to continue
        </p>
      </div>
    </div>
  );
};

export default Public;
