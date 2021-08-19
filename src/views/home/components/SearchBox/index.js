import { useState } from "react";

import "./style.css";
export default function SearchBox({ onSearch, onClose, isSearching }) {
  const [searchText, setSerchText] = useState("");

  const handleSearchClick = () => {
    setSerchText("");
    onClose();
  };

  return (
    <div className={`search-box ${isSearching && "fixed-top"}`}>
      <h2 className="search-box-title">Buscador de Personal</h2>
      <div className="search-box-buttons">
        <label>
          <input
            value={searchText}
            onChange={({ target: { value } }) => setSerchText(value)}
            className="search-box-input"
          />
        </label>
        <button
          onClick={() => onSearch(searchText)}
          className="search-box-buttons-search"
          disabled={!searchText.length}
        >
          Buscar
        </button>
        {isSearching && (
          <button
            onClick={handleSearchClick}
            className="search-box-buttons-close"
          >
            Cerrar
          </button>
        )}
      </div>
    </div>
  );
}
