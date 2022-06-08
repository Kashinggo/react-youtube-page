import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <label for="search"></label>
      <input type="search" className="search-input" placeholder="Search" />
      <i className="fa fa-search"></i>
    </div>
  );
}

export default SearchBar;
