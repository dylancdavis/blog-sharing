# Overview

This is my blog-sharing application, created using the MERN stack and deployed using fly.io. To interact with the current production version of the site, visit its [fly.io link](https://blog-sharing.fly.dev/)! This will take you to the login page seen below:

![blog-sharing-login-page](https://user-images.githubusercontent.com/104338788/230449682-4994e446-eb21-417b-9e51-d83d1ef42c24.png)

Login with these demo credentials to gain access:
  - Username: demo
  - Password: password

Or, feel free to create your own account! However, do NOT use a password you use on other sites! This is a personal project only, and I make no guarantee as to the long-term security of its passwords.

## Features

At the moment, this application's main features include:
 - Sharing of blogs from a user, indicating its title, author, and link
 - Liking other users' shared blogs
 - Commenting on said shared blogs

## Technologies

To build this project, I used the MERN stack, in addition to the other technologies seen below:
 - Redux: to better organize blog and user state
 - React Router: to provide routing between login pages, and individual users/blogs
 - Jest & Cypress: for frontend and end-to-end testing
 - Mongoose: to easily interface with the MongoDB server used
