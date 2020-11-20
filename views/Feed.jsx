const React = require("react");
const Layout = require("./Layout");

function Feed(props) {
  console.log("props.posts", props.posts);
  return (
    <Layout>
      <div>
        <h1>Hello World</h1>
        {props.posts.map((post, i) => {
          return <img key={i} src={post.image} alt="feed-image" />;
        })}
      </div>
    </Layout>
  );
}

module.exports = Feed;
