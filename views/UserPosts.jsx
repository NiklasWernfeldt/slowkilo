const React = require("react");
const Layout = require("./Layout");

function UserPosts(props) {
  console.log(props);
  return (
    <Layout>
      <main className="main">
        <div>
          <h1 className="header">{props.user.username}</h1>
          <form action={`/follow/add/${props.user._id}`} method="get">
            <button type="submit">Follow</button>
          </form>
          {props.user.posts.map((post, i) => {
            return (
              <div key={i}>
                <a href={`/posts/details/${post._id}`}>
                  <img className="feed-img" src={post.image} alt="feed-image" />
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

module.exports = UserPosts;
