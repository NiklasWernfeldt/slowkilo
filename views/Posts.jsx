const React = require("react");
const { post } = require("../app");
const Layout = require("./Layout");

function Posts(props) {
  return (
    <Layout>
      <main className="main">
      <div>
        <h1 className="header">My Posts</h1>
        <p className="user-myposts">{props.user.username}</p>
        {props.user.posts.length === 0 ? (
          <div>
            <p>You didn't post anything yet.</p>
            <button><a href="/posts/create">New post</a></button> 
          </div>
          ) : (
        <button className="new-edit-button"><a href="/posts/create">New post</a></button>)}

        {props.user.posts.map((post, i) => {
          return (
            <div key={i}>
              <br/>
              <h3>{post.title}</h3>
              <a href={`/posts/details/${post._id}`}>
                <img className="feed-img" src={post.image} alt="feed-image" />
              </a>
              <br/>
              <button className="new-edit-button"><a href={`/posts/edit/${post._id}`}>Edit post</a></button> 
            </div>
          );
        })}

      </div>
      </main>
    </Layout>
  );
}

module.exports = Posts;
