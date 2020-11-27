const React = require("react");

function SearchBar() {
  return (
    <div class="search-div">
      <form class="search-form" action="/search" method="get">
        <input
          class="search-input"
          type="text"
          name="username"
          placeholder="search by username"
        />
        <button class="search-btn" type="submit">
          <img class="search-img" src="/images/search.png" />
        </button>
      </form>
    </div>
  );
}

module.exports = SearchBar;
