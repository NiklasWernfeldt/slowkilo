const React = require("react");
const allPosts = require("../models/allPosts.model");
const Layout = require("./Layout");

function Feed(props) {
  return (
    <Layout>
      <h1>HELLO WORLD</h1>
      {/* {props.user.allPosts.map((post, i) => {
        return (
          <div key={i}>
            <img src={props.user.allPosts.posts.image} alt="nada" />
            <h2>{props.user.posts.title}</h2>
          </div>
        );
      })}  */}
    </Layout>
  );
}

module.exports = Feed;
