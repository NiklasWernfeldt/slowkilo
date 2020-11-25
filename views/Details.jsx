const React = require("react");
const Layout = require("./Layout");

function Details(props) {
    return (
      <Layout>
        <div>
        <img src={props.post.image} alt="feed-image" /> 
        <p>{props.post.title}</p>
        <p>{props.post.description}</p>
        </div>
      </Layout>
    );
  }
  
  module.exports = Details;