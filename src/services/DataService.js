import axios from "axios";

const API_URL = "https://www.snagfilms.com/apis/films.json?limit=10";

export const fetchFilms = () => axios.get(API_URL);
