# Overview

An implementation of a basic CRUD application implemented using the MERN stack and deployed using fly.io.

![blog-sharing-login-page](https://user-images.githubusercontent.com/104338788/230449682-4994e446-eb21-417b-9e51-d83d1ef42c24.png)

Login with these demo credentials to gain access:
  - Username: demo
  - Password: password

Or, you can create your own example account.

## Features
 - Sharing of blogs from a user, indicating its title, author, and link
 - Liking other users' shared blogs
 - Commenting on said shared blogs

## Technologies

This application is built using React on the frontend, and Node+Express on the backend, with MongoDB as a database.
In addition, it relies on the following other technologies:
 - Redux: to better organize blog and user state
 - React Router: to provide routing between login pages, and individual users/blogs
 - Jest & Cypress: for frontend and end-to-end testing
 - Mongoose: to easily interface with the MongoDB server used
