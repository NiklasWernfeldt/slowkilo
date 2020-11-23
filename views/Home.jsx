const React = require("react");
const Layout = require("./Layout");

function Home(props) {
  return (
    <Layout title="Home Page">
      <h1>Home Page</h1>
      <form action="/auth/signup" method="post">
        <input name="username" type="text" placeholder="Enter your username" />
        <br />
        <input name="email" type="email" placeholder="Enter your email" />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <br />
        <button type="submit">Create account</button>
      </form>
      {props.errorMessage ? <p>{props.errorMessage}</p> : null}
    </Layout>
  );
}

module.exports = Home;
