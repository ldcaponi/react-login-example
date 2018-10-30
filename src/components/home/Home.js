import React from "react";
import { fetchFilms } from "../../services/DataService";
import "./Home.scss";

class Home extends React.Component {
  componentDidMount() {
    fetchFilms()
      .then(res => {
        console.log(res.data.films);
      })
      .catch(e => {});
  }

  render() {
    return (
      <div className="Home">
        <h1 className="Home__heading">Check out our latest films...</h1>
      </div>
    );
  }
}

export default Home;
