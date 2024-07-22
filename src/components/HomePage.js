

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies, getImageUrl } from '../Api';
import '../App.css'; 

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPopularMovies(page).then((response) => {
      setMovies(response.data.results);
      setError(null);
    }).catch((error) => {
      setError('Error fetching popular movies.');
    });
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      {error && <p className="error">{error}</p>}
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
            </Link>
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <Link to={`/movie/${movie.id}`}>
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
