require("dotenv").config();

const PORT = 3001;
const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI_TEST = process.env.MONGO_URI_TEST;

module.exports = { PORT, MONGO_URI, MONGO_URI_TEST };
