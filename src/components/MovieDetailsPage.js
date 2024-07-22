import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail, getMovieCast, getImageUrl } from '../Api';
import '../App.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    getMovieDetail(id)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });

    getMovieCast(id)
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => {
        console.error('Error fetching movie cast:', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <h1>{movie.title}</h1>
      <div className="movie-detail-content">
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <p><strong>OverView :</strong><br></br>{movie.overview || 'No overview available'}</p>
          <p><strong>Release Date:</strong> {movie.release_date || 'N/A'}</p>
          <p><strong>Rating:</strong> {movie.vote_average || 'N/A'}</p>
          <button className="view-details-button" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
        </div>
      </div>
      {showDetails && (
        <>
          <h2>Cast</h2>
          <div className="cast-grid">
            {cast.map((member) => (
              <div key={member.cast_id} className="cast-member">
                <img src={getImageUrl(member.profile_path)} alt={member.name} className="cast-photo" />
                <p>{member.name}</p>
                <p><strong>Character:</strong> {member.character}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailPage;