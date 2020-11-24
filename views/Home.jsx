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
      <div>
    
      <h1>SlowKilo</h1>
      <button type="button"><a href="/auth/signup">Sign up</a></button>
      <button type="button"><a href="/auth/login">Login</a></button>

      </div> 
   </body>
  </html>
  );
}

module.exports = Home;
