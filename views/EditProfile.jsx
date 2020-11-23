const React = require("react");
const Layout = require("./Layout");

function EditProfile(props) {
    return (
      <Layout>
        
        <form action="/profile/edit" method="post">
          <label> Username - {props.user.username} </label>
            <input name="username" type="text" placeholder="Change your username" />
            <br/>
          <label>Email - {props.user.email}</label>
            <input name="email" type="text" placeholder="Change your email"/>
            <br/>
          <label>Change password</label>
            <input name='password' type="password"/>
            <br/>
            <button type="submit">Edit profile</button>
        </form>

      </Layout>
    );
  }
  
  module.exports = EditProfile;