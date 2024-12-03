
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../slices/MoviesSlice";
import Card from "./Card";
const Header = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.MoviesSlice);
  return (
    <div className="p-4">
      <button
        onClick={() => dispatch(fetchMovies())}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isLoading ? "Loading..." : "Fetch Movies"}
      </button>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      <Card />
    </div>
  );
};

export default Header;
