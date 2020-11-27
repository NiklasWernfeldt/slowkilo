const React = require("react");
const Layout = require("./Layout");

function Details(props) {
  return (
    <Layout title="Details" pageCSS="/stylesheets/details.css">
      <main>
        <div className="details-div">
          <img
            className="details-img"
            src={props.post.image}
            alt="feed-image"
          />
        </div>
      </main>
    </Layout>
  );
}

module.exports = Details;
