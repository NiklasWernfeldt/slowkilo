const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> {props.title ? props.title : "My App"} </title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/stylesheets/style.css" />

        {props.pageCSS ? <link rel="stylesheet" href={props.pageCSS} /> : null}
      </head>

      <body>
        <div class="props-children-container">{props.children}</div>

        <div className="navbar">
          <div class="navbar-links">
            <a href="/feed">
              {" "}
              <img class="nav-logos" src="/images/feeding.png" />
              <p>Feed</p>
            </a>
          </div>
          <div class="navbar-links">
            <a href="/profile">
              {" "}
              <img class="nav-logos" src="/images/gingerbread-man.png" />
              <p>My Profile</p>
            </a>
          </div>
          <div class="navbar-links">
            <a href="/posts">
              {" "}
              <img class="nav-logos" src="/images/cider.png" />
              <p>My posts</p>
            </a>
          </div>
          <div class="navbar-links">
            <a href="/auth/logout">
              {" "}
              <img class="nav-logos" src="/images/zombie.png" />
              <p>Log out</p>
            </a>
          </div>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

module.exports = Layout;
