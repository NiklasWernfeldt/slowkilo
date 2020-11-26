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
            <form
              className="auth-form"
              action="/auth/signup"
              method="post"
              encType="multipart/form-data"
            >
              <label for="profile-input">Choose you profile image</label>
              <input
                id="profile-input"
                className="auth-input"
                type="file"
                name="profileImg"
              />
              <input
                className="auth-input"
                name="username"
                type="text"
                placeholder="Enter your username"
              />

              <input
                className="auth-input"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <input
                className="auth-input"
                name="repeatPassword"
                type="password"
                placeholder="Repeat your password"
              />
              <br/>
              <button className="auth-button" type="submit">Sign up</button>
            </form>
            <p className="auth-message">{props.errorMessage}</p>
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Signup;
