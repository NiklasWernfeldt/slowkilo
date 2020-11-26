const React = require("react");

function Following(props) {
  return (   
<div className="following">
   <div class="dropdown">    
   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Following
            </button> 
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">    
   {props.user.following.map((follower, i) => {
    return (
        <a class="dropdown-item" href={`/posts/user/${follower._id}`}>{follower.username}</a>
        )
      })}
    </div>
</div> 
<br/>
<div class="dropdown">    
   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Followers
            </button> 
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">    
   {props.user.followers.map((follower, i) => {
    return (
        <a class="dropdown-item" href={`/posts/user/${follower._id}`}>{follower.username}</a>
        )
      })}
    </div>
</div> 
</div>
);


}

module.exports = Following;
