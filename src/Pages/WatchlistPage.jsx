import React, { useState, useEffect } from 'react';
import WatchlistForm from '../Components/WatchlistForm';
import MovieList from '../Components/MovieList';
import WatchlistItem from '../Components/WatchlistItem';
import { initialDatabase, STORAGE_KEY } from '../Interfaces/constants';

function WatchlistPage() {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(initialDatabase);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults(initialDatabase);
      return;
    }
    const filtered = initialDatabase.filter(movie => 
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const addToWatchlist = (movie) => {
    if (watchlist.some(item => item.id === movie.imdbID)) {
      alert('This movie is already in your watchlist!');
      return;
    }
    const newItem = {
      id: movie.imdbID,
      name: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      watched: false
    };
    setWatchlist([...watchlist, newItem]);
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter(item => item.id !== id));
  };

  const toggleWatchedStatus = (id) => {
    setWatchlist(watchlist.map(item => {
      if (item.id === id) {
        return { ...item, watched: !item.watched };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <WatchlistForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <MovieList 
          searchResults={searchResults}
          addToWatchlist={addToWatchlist}
        />

        <section className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl h-fit space-y-4 shadow-xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-200 flex items-center gap-2">
              🍿 My Watchlist
            </h2>
            <span className="bg-indigo-500/10 text-indigo-400 font-bold text-xs px-2.5 py-1 rounded-full border border-indigo-500/20">
              {watchlist.length} Movies
            </span>
          </div>

          {watchlist.length === 0 ? (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <span className="text-3xl block">🎬</span>
              <p className="text-xs">Your list is empty.</p>
              <p className="text-[11px] text-slate-600">Add movies from the catalog on the left.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {watchlist.map((item) => (
                <WatchlistItem 
                  key={item.id}
                  item={item}
                  toggleWatchedStatus={toggleWatchedStatus}
                  removeFromWatchlist={removeFromWatchlist}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default WatchlistPage;