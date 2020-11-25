const React = require("react");
const { post } = require("../app");
const Layout = require("./Layout");

function Posts(props) {
  return (
    <Layout>

      <div>
        <h1>POSTS FROM USER </h1>
        {props.user.posts.length === 0 ? (
          <div>
            <p>You haven't posted anything yet.</p>
            <button><a href="/posts/create">New post</a></button> 
          </div>
          ) : (
        <button><a href="/posts/create">New post</a></button>)}

        {props.user.posts.map((post, i) => {
          return (
            <div key={i}>
              <a href={`/posts/details/${post._id}`}>
                <img src={post.image} alt="feed-image" />
              </a>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button><a href={`/posts/edit/${post._id}`}>Edit post</a></button> 
            </div>
          );
        })}

        <h1>{props.user.username}</h1>
      </div>
    </Layout>
  );
}

module.exports = Posts;
