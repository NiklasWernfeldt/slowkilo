const React = require("react");
const Layout = require("./Layout");

function EditProfile(props) {
  return (
    <Layout>
      <form action="/profile/edit" method="post" encType="multipart/form-data">
        <label> Username - {props.user.username} </label>
        <input
          name="username"
          type="text"
          placeholder="Change your username"
          defaultValue={props.user.username}
        />
        <br />
        <label>Email - {props.user.email}</label>
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
    </Layout>
  );
}

module.exports = EditProfile;
