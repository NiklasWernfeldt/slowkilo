const React = require("react");
const Layout = require("./Layout");

function CreatePost() {
  return (
    <Layout>
      <div>
        <h1>Create Post Page</h1>
        <form
          action="/posts/create"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="image" placeholder="Upload an image" />
          <input name="title" type="text" placeholder="Enter a title" />
          <input
            name="description"
            type="text"
            placeholder="Enter a description"
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = CreatePost;
