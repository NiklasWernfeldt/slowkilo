const React = require("react");
const Layout = require("./Layout");

function Feed(props) {
  console.log("props.posts", props.posts);
  return (
    <Layout>
      <div>
        {props.posts.map((post, i) => {
          return (
        <div key={i}>
          <img src={post.image} alt="feed-image" />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
          )
        })}
      </div>
    </Layout>
  );
}

module.exports = Feed;
