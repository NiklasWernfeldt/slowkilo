const React = require("react");
const Layout = require("./Layout");

function PostEdit(props) {
    return (
      <Layout>
      <div>
        <h1>Edit Post Page</h1>
        <div>
          <img src={`${props.post.image}`} alt="post image"/>
          <p>{props.post.title}</p>
          <p>{props.post.description}</p>




        </div>
        <form action={`/posts/edit/${props.post._id}`} method="post" encType="multipart/form-data">
            <input type='file' name='image' placeholder="Upload an image"/>
            <input name="title" type="text" placeholder="Enter a title" />
            <input name="description" type="text" placeholder="Enter a description"/>
            <button type="submit">Edit Post</button> <button type="button"><a href={`/posts/delete/${props.post._id}`}> Delete Post</a></button>
        </form>
      </div>
      </Layout>
    );
  }
  
  module.exports = PostEdit;