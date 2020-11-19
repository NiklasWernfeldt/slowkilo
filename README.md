# M2 Project Structure

### YOUR README/DOCUMENTATION

# SlowKilo

​
​
​

## Description

​
Social media page where users can create posts that will contain an image, description and date. Users can create, edit or delete their own posts and visit other user's posts.
​

## User Stories

​

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
  ​
  ​
  ​

## Backlog

​
List of other features outside of the MVPs scope
​
Adding friends:
​

- GET /friend-images
  - render friend's images
- GET /:user/images/:id
  - render only one image from a friend
    ​
    Adding likes and comments to posts
    ​
    Geo Location:
    ​
- add geolocation to posts when creating
  ​
  Events page:
  ​
- create an events model
- add a page where the user could create events of their own and join events from other users
  ​

## ROUTES:

​

- GET /
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to /feed if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to /feed if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to /feed if user logged in
  - body:
    - username
    - password
- ¿¿POST /auth/logout ??
  - body: (empty)
- GET /feed
  - renders the posts list
- GET /profile
  - render profile information and edit profile
- GET /edit-profile
  - render update profile form
- POST /edit-profile
  - update profile information
- GET /my-posts
  - display my posts
- GET /edit-my-post/:id
  - render edit my post view
- POST /edit-my-post/:id
  - edit the view
- POST /edit-my-post/:id/delete
  - delete the post and redirects to my-posts
- GET /create-post
- POST /create-post
  - body:
    - image
    - name
    - date
    - location
    - description
- GET /images/:id
  - renders the image detail page
    ​

## Models

​
User model
​

```
{
username: String
profileImage: String
images: [String]
email: String
password: String
friends: [ObjectId<User>]
}
```

​
Post model
​

```
{
image: String
title: String
username: ObjectId<User>
description: String
date: Date
}
{
timestamps: { createdAt :"created_at"
			  updatedAt: "updated_at" }
}
```

​

## Links

​

### Trello

​
[Link to our trello board](https://trello.com/b/olbvJpqc/module2-project)
​

### Git

​
The url to your repository and to your deployed project
​
[Repository Link](http://github.com/)
​
[Deploy Link](http://heroku.com/)
​

### Slides

​
The url to your presentation slides
​
[Slides Link](http://slides.com/)
