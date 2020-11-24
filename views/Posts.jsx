const React = require("react");
const { post } = require("../app");
const Layout = require("./Layout");

function Posts(props) {
  return (
    <Layout>
      <div>
        {props.user.posts.map((post, i) => {
          return (
            <div key={i}>
              <a href={`/posts/details/${post._id}`}><img src={post.image} alt="feed-image" /></a>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          );
        })}

        <h1>{props.user.username}</h1>
      </div>
    </Layout>
  );
}

module.exports = Posts;
