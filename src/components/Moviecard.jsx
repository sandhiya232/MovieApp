import React, { useContext } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { WatchListContext } from "../context/WatchListContext";

function Moviecard({ movie }) {
  const { togglewatchlist, watchlist } = useContext(WatchListContext);
  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white relative">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-contain rounded-sm"
      />
      <h3 className="text-lg font-bold mt-4">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.release_date}</p>
      <button
        className="absolute top-2 right-2 text-red-500 text-xl"
        onClick={() => togglewatchlist(movie)}
      >
        {isInWatchlist ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}

export default Moviecard;
