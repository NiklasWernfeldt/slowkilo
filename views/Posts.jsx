const React = require("react");
const Layout = require("./Layout");

function Posts(props) {
  return (
    <Layout>
      <div>
        <h1>Helloo</h1>
        {props.user.posts.map((post, i) => {
          return (
            <div key={i}>
              <a href={`/posts/details/${post._id}`}><img src={post.image} alt="feed-image" /></a>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Posts;
