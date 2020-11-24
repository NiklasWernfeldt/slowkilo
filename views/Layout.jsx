const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        {props.children}
      
      

  <div class="navbar">
    <a href="/feed">Feed</a>
    <a href="/profile">My Profile</a>
    <a href="/posts">My posts</a>
  </div>
      </body>
    </html>
  );
}

module.exports = Layout;
