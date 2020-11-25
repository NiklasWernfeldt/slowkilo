const React = require("react");
const Layout = require("./Layout");

function Details(props) {
    return (
      <Layout>
        <main>
        <div>
        <h1 className="header">{props.post.title}</h1>
        <img className="details-img" src={props.post.image} alt="feed-image" /> 
        <p>{props.post.description}</p>
        </div>
        </main>
      </Layout>
    );
  }
  
  module.exports = Details;