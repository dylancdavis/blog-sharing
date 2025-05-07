# Overview

An implementation of a basic CRUD application implemented using the MERN stack and deployed at fly.io

![blog-sharing-login-page](https://user-images.githubusercontent.com/104338788/230449682-4994e446-eb21-417b-9e51-d83d1ef42c24.png)

On the [demo site](https://blog-sharing.fly.dev/), log in with these credentials to gain access:
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
 - Redux: for centralizing application state
 - React Router: for automatic routing between application pages
 - Jest & Cypress: for frontend and end-to-end testing
 - Mongoose: for access to MongoDB database
