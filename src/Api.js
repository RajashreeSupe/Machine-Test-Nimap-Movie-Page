// import axios from 'axios';

// const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// export const getPopularMovies = () => axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
// export const getTopRatedMovies = () => axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
// export const getUpcomingMovies = () => axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
// export const getMovieDetail = (movie_id) => axios.get(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
// export const getMovieCast = (movie_id) => axios.get(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`);
// export const searchMovies = (query) => axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
// export const getImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;


import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getPopularMovies = (page = 1) => axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
export const getTopRatedMovies = (page = 1) => axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
export const getUpcomingMovies = (page = 1) => axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
export const getMovieDetail = (movie_id) => axios.get(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
export const getMovieCast = (movie_id) => axios.get(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`);
export const searchMovies = (query, page = 1) => axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
export const getImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;
