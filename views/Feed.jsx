const React = require("react");
const Layout = require("./Layout");

function Feed(props) {
  //console.log("props.posts" props.posts);
  return (
    <Layout>
      <div>
        <h1>Heloo from feed</h1>
        {props.post.map((post, i) => {
          return (
            <div key={i}>
              <a href={`/posts/user/${props.post[i].user._id}`}>
                <p>{props.post[i].user.username}</p>
              </a>
              <a href={`/posts/details/${post._id}`}>
                <img src={post.image} alt="feed-image" />
              </a>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Feed;
