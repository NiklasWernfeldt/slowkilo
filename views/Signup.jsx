const React = require("react");
const Layout = require("./Layout");

function Signup () {
return (
    <Layout>
        
        <form action="/auth/signup" method="post">
            <input name="username" type="text" placeholder="Enter your username" />
            <input name="password" type="password" placeholder="Enter your password"/>
            <input name="repeat-password" type="password" placeholder="Repeat your password"/>
            <button type="submit">Sign up</button>
        </form>

    </Layout>
)


}

module.exports = Signup;