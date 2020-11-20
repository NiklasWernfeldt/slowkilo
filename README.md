# SlowKilo

## Description

Social media page where users can create posts that will contain an image, description and date. Users can create, edit or delete their own posts and visit other user's posts.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to have a preview of what the page is about and be able to signup or login
- **sign up** - As a user I want to sign up on the webpage so that I can see my feed and other users profile
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **search bar** - As a user I want to access other user's profile by searching their username
- **profile page** - As a user I want to see my profile information and be able to edit it
- **my posts page** - As a user I want to see all my posts
- **create post page** - As a user I want to be able to create a new post that will be available in my posts page
- **edit/delete post page** - As a user I want to be able to edit my posts and delete them
- **image page** - As a user I want to access one post and display it full-screen
- **feed** - As a user I want to be able to see a list of the latest pictures uploaded to the platform.

## Backlog

List of other features outside of the MVPs scope

Adding friends:

- GET /friend-images
  - render friend's images
- GET /:user/images/:id
  - render only one image from a friend

Adding likes and comments to posts

Geo Location:

- add geolocation to posts when creating

Events page:

- create an events model
- add a page where the user could create events of their own and join events from other users

## ROUTES:

| **Method** | **Route**     | **Description**                                                                                       | **Request - Body**                          |
| ---------- | ------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `GET`      | /             | Renders the home page                                                                                 |                                             |
| `GET`      | /auth/signup  | Renders the signup form                                                                               |                                             |
| `POST`     | /auth/signup  | Sends Sign Up info to the server and creates user in the DB . Redirects to /feed if user is logged in | {username, password}                        |
| `GET`      | /auth/login   | Renders the login form                                                                                |                                             |
| `POST`     | /auth/login   | Redirects to /feed if user is logged in                                                               | {username, password}                        |
| `POST`     | /auth/logout  | Logs out from the session and redirects to /                                                          |                                             |
| `GET`      | /feed         | Renders the posts list                                                                                |                                             |
| `GET`      | /profile      | Renders profile information                                                                           |                                             |
| `GET`      | /edit-profile | Renders update profile form                                                                           |                                             |
| `POST`     | /edit-profile | Sends updated profile information to the server and modifies user in the DB. Redirects to /profile    | {username, password, image}                 |
| `GET`      | /my-posts     | Displays user posts history                                                                           |                                             |
| `GET`      | /create-post  | Renders the form to create a new post                                                                 |                                             |
| `POST`     | /create-post  | Sends post information to the server and adds post to DB. Redirects to /my-posts                      | {image, title, username, description, date} |
| `GET`      | /post/:id/    | Renders a single image                                                                                |
| `GET`      | /:id/edit     | Renders edit post form for a specific post id                                                         |                                             |
| `POST`     | /:id/edit     | Sends edited post information to the server and modifies it in the DB. Redirects to /my-posts         | {image, title, username, description, date} |
| `GET`      | /images/:id   | Renders image detail page                                                                             |                                             |

## Models

User model

```
const userSchema = new Schema({
  username: { type: String, unique: true },
  userImage: String,
  posts: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Post" }],
  email: String,
  password: String,
  allPosts: [{ type: mongoose.SchemaTypes.ObjectId, ref: "allPosts" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

Post model

```
const postSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    user: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
    description: String,
    date: Date,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
```

AllPosts model

const allPostsSchema = new Schema({
posts: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Post" }],
});

const allPosts = mongoose.model("allPost", allPostsSchema);

module.exports = allPosts

## Links

### Trello

[Link to our trello board](https://trello.com/b/olbvJpqc/module2-project)

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/NiklasWernfeldt/slowkilo)

[Deploy Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](
