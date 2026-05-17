import { useState, useEffect } from 'react';

import angryMenPoster from './assets/12_angry_men.jpg';
import backToTheFuturePoster from './assets/Back_to_the_Future.jpg';
import eternalSunshinePoster from './assets/Eternal_sunshine_of_the_spotless_mind.jpg';
import fightClubPoster from './assets/Fight_club.jpg';
import forrestGumpPoster from './assets/Forrest_Gump.jpg';
import godfatherPoster from './assets/Godfather.jpg';
import greenMilePoster from './assets/Green_mile.jpg';
import inceptionPoster from './assets/Inception.jpg';
import interstellarPoster from './assets/Interstellar.jpg';
import lordOfTheRingsPoster from './assets/Lordofthering_thereturnoftheking.jpg';
import matrixPoster from './assets/Matrix.jpg';
import prestigePoster from './assets/Prestige.jpg';
import pulpFictionPoster from './assets/Pulp_Fiction.jpg';
import schindlersListPoster from './assets/Schindlers_list.jpg';
import sevenPoster from './assets/Seven.jpg';
import shawshankPoster from './assets/ShawshankRedemption.jpg';
import silenceOfLambsPoster from './assets/Silence_of_lambs.jpg';
import darkKnightPoster from './assets/The_Dark_Knight.jpg';
import pianistPoster from './assets/The_Pianist.jpg';
import usualSuspectsPoster from './assets/Usual_suspects.jpg';

function App() {
  const initialDatabase = [
    { imdbID: '1', Title: 'The Shawshank Redemption', Year: '1994', Poster: shawshankPoster },
    { imdbID: '2', Title: 'The Godfather', Year: '1972', Poster: godfatherPoster },
    { imdbID: '3', Title: 'The Dark Knight', Year: '2008', Poster: darkKnightPoster },
    { imdbID: '4', Title: '12 Angry Men', Year: '1957', Poster: angryMenPoster },
    { imdbID: '5', Title: 'Schindlers List', Year: '1993', Poster: schindlersListPoster },
    { imdbID: '6', Title: 'The Lord of the Rings: The Return of the King', Year: '2003', Poster: lordOfTheRingsPoster },
    { imdbID: '7', Title: 'Pulp Fiction', Year: '1994', Poster: pulpFictionPoster },
    { imdbID: '8', Title: 'Inception', Year: '2010', Poster: inceptionPoster },
    { imdbID: '9', Title: 'Fight Club', Year: '1999', Poster: fightClubPoster },
    { imdbID: '10', Title: 'Forrest Gump', Year: '1994', Poster: forrestGumpPoster },
    { imdbID: '11', Title: 'Interstellar', Year: '2014', Poster: interstellarPoster },
    { imdbID: '12', Title: 'The Matrix', Year: '1999', Poster: matrixPoster },
    { imdbID: '13', Title: 'The Silence of the Lambs', Year: '1991', Poster: silenceOfLambsPoster },
    { imdbID: '14', Title: 'The Pianist', Year: '2002', Poster: pianistPoster },
    { imdbID: '15', Title: 'The Prestige', Year: '2006', Poster: prestigePoster },
    { imdbID: '16', Title: 'The Green Mile', Year: '1999', Poster: greenMilePoster },
    { imdbID: '17', Title: 'Se7en', Year: '1995', Poster: sevenPoster },
    { imdbID: '18', Title: 'Back to the Future', Year: '1985', Poster: backToTheFuturePoster },
    { imdbID: '19', Title: 'The Usual Suspects', Year: '1995', Poster: usualSuspectsPoster },
    { imdbID: '20', Title: 'Eternal Sunshine of the Spotless Mind', Year: '2004', Poster: eternalSunshinePoster }
  ];

  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('my_watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(initialDatabase);

  useEffect(() => {
    localStorage.setItem('my_watchlist', JSON.stringify(watchlist));
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
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎬</span>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              CineTrack Pro
            </h1>
          </div>
        </div>

        <form onSubmit={handleSearch} className="w-full sm:w-auto flex gap-2">
          <input
            type="text"
            placeholder="Search the catalog... (Matrix, Inception...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-4 py-2 rounded-xl transition-colors shadow-lg">
            Search
          </button>
        </form>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <div 
                  key={item.id} 
                  className={`flex gap-3 p-2 rounded-xl border transition-all ${
                    item.watched 
                      ? 'bg-slate-950/40 border-slate-900 opacity-50' 
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="w-12 h-16 bg-slate-800 rounded-lg flex items-center justify-center shadow overflow-hidden">
                    <img src={item.poster} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <h4 className={`text-sm font-semibold line-clamp-1 ${item.watched ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400">{item.year}</p>
                    </div>
                    
                    <div className="flex gap-2 items-center justify-end mt-1">
                      <button
                        onClick={() => toggleWatchedStatus(item.id)}
                        className={`text-[11px] font-medium px-2 py-1 rounded-md transition-colors ${
                          item.watched
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                        }`}
                      >
                        {item.watched ? '✓ Watched' : 'Watch'}
                      </button>
                      <button
                        onClick={() => removeFromWatchlist(item.id)}
                        className="text-[11px] font-medium bg-slate-800 hover:bg-rose-500/10 text-slate-400 hover:text-rose-400 px-2 py-1 rounded-md transition-colors border border-slate-700 hover:border-rose-500/20"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
