import React from "react";
import MovieCard from "../cards/MovieCard";
import { fetchFilms } from "../../services/DataService";
import "./Home.scss";

class Home extends React.Component {
  state = {
    films: []
  };
  componentDidMount() {
    fetchFilms()
      .then(res => {
        this.setState({ films: res.data.films.film });
      })
      .catch(e => {});
  }

  render() {
    const { films } = this.state;

    return (
      <div className="Home">
        <h1 className="Home__heading">Check out our latest films...</h1>

        <div className="CardsContainer">
          {films.map(i => (
            <MovieCard key={i.id} film={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
