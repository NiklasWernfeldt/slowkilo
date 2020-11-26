const React = require("react");
const Layout = require("./Layout");

function EditProfile(props) {
  return (
    <Layout title="Edit Profile" pageCSS="/stylesheets/edit-profile">
      <main className="main">
      <div>
      <h1 className="header">Edit Profile</h1>
      <form action="/profile/edit" method="post" encType="multipart/form-data">
        <label>Username </label>
        <input
          name="username"
          type="text"
          placeholder="Change your username"
          defaultValue={props.user.username}
        />
        <br />
        <label>Email</label>
        <input
          name="email"
          type="text"
          placeholder="Change your email"
          defaultValue={props.user.email}
        />
        <br />

        <label>Change profile image</label>
        <input name="changeProfileImage" type="file" placeholder="change pic" />
        <br />
        <button type="submit">Edit profile</button>
      </form>
      </div>
      </main>
    </Layout>
  );
}

module.exports = EditProfile;
