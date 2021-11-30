const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  res.send("Welcome to Express");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// 'use strict'

// import cors from 'cors';
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';

// const app = express();
// const router = express.Router();

// // env variables
// const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);

// app.use(bodyParser.json(),cors())

// app.use(require('../route/auth-router'));

// app.all('*', (request, response) => {
//   console.log('Returning a 404 from the catch-all route');
//   return response.sendStatus(404);
// });

// // error middleware
// app.use(require('./error-middleware'));

// export const start = () => {
//   app.listen(PORT, () =>{
//     console.log(`Listening on port: ${PORT}`)
//   })
// }

// export const stop = () => {
//   app.close(PORT, () => {
//     console.log(`Shut down on port: ${PORT}`)
//   })
// }
