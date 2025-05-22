import { MovieItem } from "./MovieItem";
import "./MovieList.css";

export const MovieList = ({ movies }) => {
  return (
    <div className="moviesContainer">
      {movies.map((movie, index) => (
        <MovieItem key={movie.imdbID || index} movie={movie} />
      ))}
    </div>
  );
};
