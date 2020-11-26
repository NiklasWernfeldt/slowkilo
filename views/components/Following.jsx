const React = require("react");

function Following(props) {
  return (
    <div>
      {props.user.following.map((follower, i) => {
        return <p>{follower.username}</p>;
      })}
    </div>
  );
}

module.exports = Following;
