import React from 'react';

function WatchlistForm({ searchQuery, setSearchQuery, handleSearch }) {
  return (
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
  );
}

export default WatchlistForm;