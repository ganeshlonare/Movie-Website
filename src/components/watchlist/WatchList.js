// WatchList.js
import React from 'react';

const WatchList = ({ movies }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center my-8">Watch List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies?.length === 0 ? (
          <p className="text-center">Your watch list is empty.</p>
        ):
        // ) : (
        //   <ul>
        //     {movies?.map(movie => (
        //       <li key={movie.id} className="text-gray-700 text-base">{movie.title}</li>
        //     ))}
        //   </ul>
        // )
        <p className="text-center">Your watch list is empty.</p>
      }
      </div>
    </div>
  );
};

export default WatchList;
