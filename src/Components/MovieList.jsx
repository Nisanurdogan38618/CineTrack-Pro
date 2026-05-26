import React from 'react';

function MovieList({ searchResults, addToWatchlist }) {
  return (
    <section className="lg:col-span-2 space-y-4">
      <h2 className="text-xl font-bold text-slate-200 flex items-center gap-2">
        ⭐ Discover Popular Movies
      </h2>
      
      {searchResults.length === 0 && (
        <p className="text-amber-400 text-sm">No movies found matching your search.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
        {searchResults.map((movie) => (
          <div key={movie.imdbID} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between">
            <div className="relative aspect-[2/3] bg-slate-800 overflow-hidden">
              <img 
                src={movie.Poster} 
                alt={movie.Title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm line-clamp-1 text-slate-100" title={movie.Title}>{movie.Title}</h3>
                <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">{movie.Year}</span>
              </div>
              <button
                onClick={() => addToWatchlist(movie)}
                className="w-full text-center bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white font-medium text-xs py-2 rounded-xl transition-all border border-slate-700 hover:border-indigo-500"
              >
                ➕ Add to List
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieList;