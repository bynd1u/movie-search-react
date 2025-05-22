import "./MovieItem.css";

export const MovieItem = ({ movie }) => {
  return (
    <div className="movieItem">
      <img src={movie.Poster}></img>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};
