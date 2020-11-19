<<<<<<< HEAD
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
=======
const React = require("react");

function Card(props) {
  return (
    <div>
      <h1>Card component example</h1>
      <img src={props.image} width="100" alt="" />
      <p>{props.text}</p>
    </div>
  );
}

module.exports = Card;
>>>>>>> 2d990213a15638d409db1dfe88d9dbd5e0ef4240
