const React = require("react");
const Layout = require("./Layout");

function Login () {
return (
    <Layout>
        
        <form action="/auth/login" method="post">
            <input name="username" type="text" placeholder="Enter your username" />
            <input name="password" type="password" placeholder="Enter your password"/>
            <button type="submit">Login</button>
        </form>

    </Layout>
)


}

module.exports = Login;