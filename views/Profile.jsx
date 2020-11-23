const React = require('react');
const Layout = require ('./Layout');

function Profile(props) {
    return (
        <Layout>
            
            <div>
                <h3>{props.user.username}</h3>
                <p>{props.user.email}</p>
                <p>{props.user.password}</p>
                <p><a href="/profile/edit">Edit profile</a></p>
            </div>
    

            
        </Layout>
    )
}


module.exports = Profile;