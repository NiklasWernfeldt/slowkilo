const mongoose = require("mongoose");
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

const users = require("./users-mock-data");
const posts = require("./posts-mock-data");

const DB_NAME = "library";

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
    console.log(`Created ${createdUsers.length} authors`);

    // 3. WHEN .create() OPERATION IS DONE
    // UPDATE THE OBJECTS IN THE ARRAY OF books

    const updatedUsers = users.map((userObj, i) => {
      // Update the userObj and set the corresponding author id
      // to create the reference
      const user = createdUsers[i];
      userObj.posts = [user._id];

      return userObj; // return the updated bookObj
    });

    const pr = Post.create(updatedUsers);
    return pr; // forwards the promise to next `then`
  })
  .then((createdBooks) => {
    // 4. WHEN .create() OPERATION IS DONE, CLOSE DB CONNECTION
    console.log(`Inserted ${createdBooks.length} books`);

    mongoose.connection.close();
  })
  .catch((err) => console.log(err));


