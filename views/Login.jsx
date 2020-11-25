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
        <form action="/auth/login" method="post">
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
        </form>
        {props.errorMessage ? <h3>{props.errorMessage}</h3> : ""}
      </body>
    </html>
  );
}

module.exports = Login;
