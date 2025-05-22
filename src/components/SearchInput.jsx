import "./SearchInput.css";

export const SearchForm = ({ setInputValue, inputValue }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(e.target.value);
        }}
        defaultValue={inputValue}
      />
    </div>
  );
};
