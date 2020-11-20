const React = require("react");

function Card() {
  return (
    <div>
      <form action="/create-post/created" method="post">
        <input type="text" name="title" placeholder="title" />
      </form>
    </div>
  );
}

module.exports = Card;
