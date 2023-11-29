import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search for notes..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
