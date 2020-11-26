const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
    <Layout title="Profile" pageCSS="stylesheets/profile.css">
      <main className="main">
      <div>
      <h1 className="header">My Profile</h1>
        <p>Profile Image</p><img className="profile-img" src={props.user.userImage} />
        <p>Username:{props.user.username}</p>
        <p>Email: {props.user.email}</p>
        <p>
          <button className="edit-buttons"><a href="/profile/edit">Edit profile</a></button>
          <button className="edit-buttons"><a href="/profile/delete">Delete profile</a></button>
        </p>
      </div>
      </main>
    </Layout>
  );
}

module.exports = Profile;
