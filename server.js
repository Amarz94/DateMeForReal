const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userDb.js");
const Cors = require("cors");
const routes = require("./routes");
// App Config
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API endpoints
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/userDb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
});



// Listener

app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));
