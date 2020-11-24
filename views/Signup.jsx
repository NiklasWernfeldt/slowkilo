const React = require("react");

function Signup () {
return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> Sign up </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        
        <form action="/auth/signup" method="post">
            <input name="username" type="text" placeholder="Enter your username" />
            <input name="password" type="password" placeholder="Enter your password"/>
            <input name="repeat-password" type="password" placeholder="Repeat your password"/>
            <button type="submit">Sign up</button>
        </form>
        </body>

    </html>
)


}

module.exports = Signup;