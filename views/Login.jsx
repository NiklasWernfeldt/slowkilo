const React = require("react");

function Login(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> Login </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        <main className="home">
          <div className="home-div">
          <h1 className="home-header">Login</h1>
            <form className="auth-form" action="/auth/login" method="post">
              <input className="auth-input"
                name="username"
                type="text"
                placeholder="Enter your username"
              />
              <input className="auth-input"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <br/>
              <button className="auth-button" type="submit">Login</button>
            </form>
            {props.errorMessage ? <p className="auth-message">{props.errorMessage}</p> : ""}
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Login;
