const React = require("react");
const Layout = require("./Layout");
const SearchBar = require("./components/SearchBar");
const Following = require("./components/Following");

function Feed(props) {
  console.log("props.user", props.user);
  return (
    <Layout>
      <main className="main">
        <div>
          <Following user={props.user} />
          <br />
          <SearchBar />
          <h1 className="header">Feed</h1>
          {props.post.map((post, i) => {
            return (
              <div key={i}>
                <a href={`/posts/details/${post._id}`}>
                  <img className="feed-img" src={post.image} alt="feed-image" />
                </a>
                <a
                  className="username"
                  href={`/posts/user/${props.post[i].user._id}`}
                >
                  <p>{props.post[i].user.username}</p>
                </a>
                {post.comments.map((commentObj, i) => {
                  return (
                    <div key={i}>
                      <span>{commentObj.author.username} - </span>
                      <p>{commentObj.comment}</p>
                    </div>
                  );
                })}
                <form action={`/comment/create/${post._id}`} method="post">
                  <textarea name="comment" rows="1" cols="10"></textarea>
                  <button type="submit">comment</button>
                </form>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

module.exports = Feed;
