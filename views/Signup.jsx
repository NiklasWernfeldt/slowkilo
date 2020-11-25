const React = require("react");

function Signup(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> Sign up </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        <main className="home">
        <div className="home-div">
          <h1 className="home-header">Sign up</h1>
        <form className="auth-form" action="/auth/signup" method="post" encType="multipart/form-data">
          <input className="auth-input"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <p className="select-image">Select a profile image</p><input className="auth-input" type="file" name="profileImg" />
          <input className="auth-input"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <input className="auth-input"
            name="repeatPassword"
            type="password"
            placeholder="Repeat your password"
          />
          <button type="submit">Sign up</button>
        </form>
        <h1>{props.errorMessage}</h1>
      </div>
      </main>
      </body>
    </html>
  );
}

module.exports = Signup;
