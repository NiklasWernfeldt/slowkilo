const React = require("react");
const Layout = require("./Layout");

function PostEdit(props) {
    return (
      <Layout>
      <main className="main">
      <div>
        <h1 className="header">Edit Your Post</h1>
        <div>

          <img className="feed-img" src={`${props.post.image}`} alt="post image"/>
          <p>Title: {props.post.title}</p>
          <p>Description:{props.post.description}</p>

        </div>
        <form action={`/posts/edit/${props.post._id}`} method="post" encType="multipart/form-data">
            <input type='file' name='image' placeholder="Upload an image"/>
            <input name="title" type="text" placeholder="Enter a new title" defaultValue={props.post.title}/>
            <input name="description" type="text" placeholder="Update description" defaultValue={props.post.description}/>
            <button type="submit">Edit Post</button> <button type="button"><a href={`/posts/delete/${props.post._id}`}> Delete Post</a></button>
        </form>
      </div>
      </main>
      </Layout>
    );
  }
  
  module.exports = PostEdit;