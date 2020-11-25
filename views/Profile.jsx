const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
    <Layout>
      <div>
        <img src={props.user.userImage} />
        <h3>{props.user.username}</h3>
        <p>{props.user.email}</p>
        <p>
          <a href="/profile/edit">Edit profile</a>
          <a href="/profile/delete">Delete profile</a>
        </p>
      </div>
    </Layout>
  );
}

module.exports = Profile;
