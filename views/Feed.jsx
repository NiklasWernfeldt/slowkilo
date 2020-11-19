const React = require("react");
const Layout = require("./Layout");

function Feed(props) {
  return <Layout>{props.user.allPosts}</Layout>;
}

module.exports = Feed;
