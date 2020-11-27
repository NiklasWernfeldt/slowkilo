const React = require("react");
const Layout = require("./Layout");

function EditProfile(props) {
  return (
    <Layout title="Edit Profile" pageCSS="/stylesheets/edit-profile">
      <main className="main">
        <div className="edit-profile-div">
          <h1 className="header">Edit Profile</h1>
          <form
            className="edit-profile-form"
            action="/profile/edit"
            method="post"
            encType="multipart/form-data"
          >
            <label>Username </label>
            <br />
            <input
              name="username"
              type="text"
              placeholder="Change your username"
              defaultValue={props.user.username}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              name="email"
              type="text"
              placeholder="Change your email"
              defaultValue={props.user.email}
            />
            <br />

            <label>Change profile image</label>
            <br />
            <input
              name="changeProfileImage"
              type="file"
              placeholder="change pic"
            />
            <br />
            <button className="edit-btn" type="submit">
              Edit profile
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}

module.exports = EditProfile;
