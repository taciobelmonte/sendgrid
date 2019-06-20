import express from "express";
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

// Express
const app = express();

app.use(cors());

// ROUTES
const email = require("./routes/api/email");

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// USE ROUTES
app.use("/api/email", email);

const port = process.env.PORT || 5000;

app.listen(port, "127.0.0.1", err => {
  // eslint-disable-next-line no-console
  if (err) console.log(err);
  // eslint-disable-next-line no-console
  console.info(">>> Open http://127.0.0.1:%s/ in your browser.", port);
});

module.exports = app;
