const React = require("react");
//const Card = require("./components/Card");

function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> SlowKilo </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <main className="home">
          <div className="home-div">
            <h1 className="home-header">Slowkilo</h1>
            <div className="home-links-div">
              <a className="auth-links signup" href="/auth/signup">
                {" "}
                <img
                  className="home-link-imgs"
                  src="/images/writing.png"
                />{" "}
                <p className="home-link-text">Sign up</p>
              </a>
              <a className="auth-links login" href="/auth/login">
                {" "}
                <img className="home-link-imgs" src="/images/log-in.png" />{" "}
                <p className="home-link-text">Login</p>
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Home;
