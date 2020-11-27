const React = require("react");
const Layout = require("./Layout");
const SearchBar = require("./components/SearchBar");
const Following = require("./components/Following");

function Feed(props) {
  console.log("props.user", props.user);
  return (
    <Layout title="Feed" pageCSS="/stylesheets/feed.css">
      <main className="main">
        <div>
          <Following user={props.user} />
          <br />
          <SearchBar />
          {props.post.map((post, i) => {
            return (
              <div className="feed-card" key={i}>
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
                <div className="comment-div">
                  <form
                    class="comment-form"
                    action={`/comment/create/${post._id}`}
                    method="post"
                  >
                    <textarea
                      className="comment-textarea"
                      name="comment"
                      rows="1"
                      cols="10"
                      placeholder="type your comment here..."
                    ></textarea>
                    <br />
                    <button className="comment-btn" type="submit">
                      comment
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

module.exports = Feed;
