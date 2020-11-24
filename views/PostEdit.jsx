const React = require("react");
const Layout = require("./Layout");

function PostEdit(props) {
    return (
      <Layout>
         <div>
        <h1>Edit Post Page</h1>
        <form action={`/posts/edit/${props.post._id}`} method="post" encType="multipart/form-data">
            <input type='file' name='image' placeholder="Upload an image"/>
            <input name="title" type="text" placeholder="Enter a title" />
            <input name="description" type="text" placeholder="Enter a description"/>
            <button type="submit">Edit Post</button>
        </form>
      </div>
      </Layout>
    );
  }
  
  module.exports = PostEdit;