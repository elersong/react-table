import React from "react";

export default function SearchForm({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(() => e.target.value);
  };

  const divStyle = {
    display: "inline-block",
    marginRight: "10px"
  }

  return (
    <div style={divStyle}>
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
