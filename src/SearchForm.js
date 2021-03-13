import React from "react";

export default function SearchForm({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(() => e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="searchTable">Search: </label>
        <input
          type="text"
          id="searchTable"
          name="searchTable"
          onChange={handleSearch}
          value={searchTerm}
        ></input>
      </form>
    </div>
  );
}
