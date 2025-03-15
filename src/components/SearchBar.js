import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    onSearch(query, year, type);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Year (e.g. 2020)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ padding: "10px", marginRight: "10px", width: "120px" }}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>

      <button onClick={handleSearch} style={{ padding: "10px" }}>Search</button>
    </div>
  );
};

export default SearchBar;

