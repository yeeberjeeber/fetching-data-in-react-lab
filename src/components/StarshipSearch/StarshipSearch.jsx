import { useState } from "react";

const StarshipSearch = ({ fetchData, totalResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(searchTerm); 
    setPrevSearchTerm(searchTerm); 
    setSearchTerm(""); 
  };

  return (
    <section>
      <h2>Search</h2>
      <p className="search-meta">
        {prevSearchTerm
          ? `Last search: ${prevSearchTerm}`
          : "Search for a starship by name."}
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search Term: </label>
        <input
          id="searchTerm"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>Number of results: {totalResults}</p>
    </section>
  );
};

export default StarshipSearch;