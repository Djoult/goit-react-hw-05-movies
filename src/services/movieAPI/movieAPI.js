import axios from 'axios';
import noimage from '../../images/noimage.png';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=70429b0b79a36ad52bc0f940658ffc09';
const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending/all/day?${KEY}`);
    return response.data.results.map(
      ({ id, poster_path, name, title, release_date }) => {
        let titleName = title || name;
        let src = poster_path ? `${BASE_IMG}${poster_path}` : noimage;
        return { id, src, titleName, release_date };
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMovie = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}?${KEY}`);

    const { poster_path, title, vote_average, overview, genres, release_date } =
      response.data;
    const src = poster_path ? `${BASE_IMG}${poster_path}` : noimage;
    const userScore = Math.ceil(vote_average * 10);

    const genresList = genres.map(({ id, name }) => <li key={id}>{name}</li>);
    return { src, title, userScore, overview, genresList, release_date };
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?${KEY}`
    );

    return response.data.cast.map(({ name, character, id, profile_path }) => {
      const src = profile_path ? `${BASE_IMG}${profile_path}` : noimage;
      return {
        name,
        character,
        id,
        src,
      };
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?${KEY}`
    );

    return response.data.results.map(({ author, id, content }) => ({
      author,
      id,
      content,
    }));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesByName = async movieName => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?query=${movieName}&include_adult=false&language=en-US&page=1&${KEY}`
    );
    return response.data.results.map(
      ({ id, poster_path, name, title, release_date }) => {
        let titleName = title || name;
        let src = poster_path ? `${BASE_IMG}${poster_path}` : noimage;
        return { id, src, titleName, release_date };
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
