const React = require("react");
const Layout = require("./Layout");

function CreatePost(props) {
  return (
    <Layout>
      <div>
        <h1>Create Post Page</h1>
        <form action="/create" method="post">
          <input type="text" name="title" placeholder="type title"></input>
        </form>
      </div>
    </Layout>
  );
}

module.exports = CreatePost;
