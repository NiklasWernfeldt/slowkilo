const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
    <Layout title="Profile" pageCSS="stylesheets/profile.css">
      <main className="main">
        <div className="profile-div">
          <h1 className="header">My Profile</h1>
          <p>Profile Image</p>
          <img className="profile-img" src={props.user.userImage} />
          <p>Username:{props.user.username}</p>
          <p>Email: {props.user.email}</p>

          <div className="profile-links-div">
            <div className="profile-links-deep-div">
              <a
                href="/profile/edit"
                className="profile-link-btns edit-profile"
              >
                {" "}
                <img
                  className=" profile-icon profile-icon-edit"
                  src="/images/cut.png"
                />{" "}
                <p className="profile-link-text"> Edit profile </p>{" "}
              </a>
            </div>
            <div className="profile-links-deep-div">
              <a
                href="/profile/delete"
                className="profile-link-btns delete-profile "
              >
                {" "}
                <img
                  className=" profile-icon profile-icon-delete"
                  src="/images/trash.png"
                />{" "}
                <p className="profile-link-text"> Delete profile </p>{" "}
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

module.exports = Profile;
