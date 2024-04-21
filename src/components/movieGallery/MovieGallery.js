// MovieGallery.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// const movies = [
//   {
//     id: 1,
//     title: 'Inception',
//     description: 'A thief who enters the dreams of others to steal secrets from their subconscious.',
//     genre: 'Sci-Fi',
//     poster: 'https://via.placeholder.com/300x400',
//   },
//   // Add more movie objects as needed
// ];

const MovieGallery = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Movie Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies?.map(movie => (
          <div key={movie.id} className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
            <img className="w-full cursor-pointer" src={movie.poster} alt={movie.title} />
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{movie.title}</div>
              <p className="text-gray-700 text-base">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
