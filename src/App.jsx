import { MovieList } from "./components/MovieList";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchInput";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getMovies = async (inputValue) => {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${inputValue}&apikey=623a5030`
      );
      const data = await response.json();
      return data;
    };

    getMovies(inputValue)
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          console.log(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [inputValue]);

  return (
    <>
      <Header title="Movie Search" />
      <SearchForm setInputValue={setInputValue} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
