const React = require("react");
function SearchBar() {
  return (
    <div>
      <form action="/search" method="get">
        <input type="text" name="username" placeholder="search by username" />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

module.exports = SearchBar;
