import React from "react";
import MovieCard from "../cards/MovieCard";
import Loader from "../loader/Loader";
import { fetchFilms } from "../../services/DataService";
import "./Home.scss";

class Home extends React.Component {
  state = {
    films: [],
    loading: true
  };

  componentDidMount() {
    fetchFilms()
      .then(res => {
        this.setState({ films: res.data.films.film, loading: false });
      })
      .catch(e => {});
  }

  render() {
    const { films, loading } = this.state;

    return (
      <div className="Home">
        <h1 className="Home__heading">Check out our latest films...</h1>

        {!loading && (
          <div className="CardsContainer">
            {films.map(i => (
              <MovieCard key={i.id} film={i} />
            ))}
          </div>
        )}

        {loading && <Loader />}
      </div>
    );
  }
}

export default Home;
