const React = require("react");
const Layout = require("./Layout");

function CreatePost() {
  return (
    <Layout title="New Post" pageCSS="/stylesheets/create-posts.css">
      <main className="main">
      <div className="form-div">
        <h1 className="header">New Post</h1>
        <form className="form"
          action="/posts/create"
          method="post"
          encType="multipart/form-data"
        >
          <p>Enter an image</p>
          <input type="file" name="image" placeholder="Upload an image" />
          <br/>
          <input name="title" type="text" placeholder="Enter a title" />
          <br/>
          <input
            name="description"
            type="text"
            placeholder="Enter a description"
          />
          <br/>
          <button type="submit">Create Post</button>
        </form>
      </div>
      </main>
    </Layout>
  );
}

module.exports = CreatePost;
