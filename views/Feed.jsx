const React = require("react");
const Layout = require("./Layout");

function Feed(props) {
  return (
    <Layout>
      <main className="main">
      <div>
        <h1 className="header">Feed</h1>
        {props.post.map((post, i) => {
          return (
            <div key={i}>
             <a href={`/posts/details/${post._id}`}><img className="feed-img" src={post.image} alt="feed-image" /></a>
             <a className="username" href={`/posts/user/${props.post[i].user._id}`}>
                <p>{props.post[i].user.username}</p>
              </a>
            </div>
          );
        })}
      </div>
      </main>
    </Layout>
  );
}

module.exports = Feed;
