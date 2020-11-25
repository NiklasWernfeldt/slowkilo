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
      <main className= "home">
      <div className="home-div">
    
      <h1 className="home-header">SlowKilo</h1>
      <div className="home-button-div">
      <button className="home-button" type="button"><a href="/auth/signup">Sign up</a></button>
      <button className="home-button" type="button"><a href="/auth/login">Login</a></button>
      </div>

      </div> 
      </main>
   </body>
  </html>
  );
}

module.exports = Home;
