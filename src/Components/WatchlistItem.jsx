import React from 'react';

function WatchlistItem({ item, toggleWatchedStatus, removeFromWatchlist }) {
  return (
    <div 
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
  );
}

export default WatchlistItem;