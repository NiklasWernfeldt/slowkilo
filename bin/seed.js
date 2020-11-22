const mongoose = require("mongoose");
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

const users = require("./user-mock-data");
const posts = require("./posts-mock-data");

const DB_NAME = "mockSlowkilo";

// SEED SEQUENCE

// 0. ESTABLISH CONNECTION TO MONGO DATABASE
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    // 1. DROP THE DATABASE
    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then(() => {
    // 2.  CREATE THE DOCUMENTS FROM ARRAY OF authors
    const pr = User.create(users);
    return pr; // forwards the promise to next `then`
  })
  .then((createdUsers) => {
    //console.log(`Created ${createdUsers.length} users`);

    // 3. WHEN .create() OPERATION IS DONE
    // UPDATE THE OBJECTS IN THE ARRAY OF posts

    const updatedPosts = posts.map((postsObj, i) => {
      // Update the postsObj and set the corresponding user id
      // to create the reference
      const user = createdUsers[i];
      //console.log('user', user);
      postsObj.user = [user._id];

      return postsObj; // return the updated postsObj
    });
    const pr = Post.create(updatedPosts);
    return pr; // forwards the promise to next `then`
  })
  .then((createdPosts) => {
    // 4. WHEN .create() OPERATION IS DONE, CLOSE DB CONNECTION
    //console.log(`Inserted ${createdPosts.length} posts`);
    //console.log(createdPosts);
    createdPosts.forEach((post, i) =>{
    const pr = User.findByIdAndUpdate(
      posts, {$set}
    )
      //console.log('post', post);
      usersObj.posts = [post._id];
      return usersObj; //return updates usersObj
    }) 
      console.log('updatedUsers', updatedUsers)
      const pr = User.updateMany({posts: []}, {$set: {posts : updatedUsers.posts}});
      return pr;
  })
  .then((update)=> {
   console.log(`Updated ${update.lenght} users`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));

