const React = require("react");
const Layout = require("./Layout");

function PostEdit(props) {
    return (
      <Layout title="Edit Posts"  pageCSS="/stylesheets/post-edit.css">
      <main className="main">
      <div>
        <h1 className="header">Edit Your Post</h1>
        <div>

          <img className="feed-img" src={`${props.post.image}`} alt="post image"/>

        </div>
        <form action={`/posts/edit/${props.post._id}`} method="post" encType="multipart/form-data">
            <input type='file' name='image' placeholder="Upload an image"/>
            <p>Title</p><input name="title" type="text" placeholder="Enter a new title" defaultValue={props.post.title}/>
            <br/>
            <p>Description</p><input className="description-box" name="description" type="text" placeholder="Update description" defaultValue={props.post.description}/>
            <br/>
            <div className="edit-div">
            <button className="edit-buttons" type="submit">Edit Post</button> <button className="edit-buttons" type="button"><a href={`/posts/delete/${props.post._id}`}> Delete Post</a></button>
            </div>
        </form>
      </div>
      </main>
      </Layout>
    );
  }
  
  module.exports = PostEdit;