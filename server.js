require('dotenv').config();
const express = require('express');
const server = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const helmet = require('helmet');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

server.use(helmet());
server.use(
  express.urlencoded({
    extended: true,
  })
);
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
server.use(cors(corsOptions));
server.use(express.json());

server.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

server.use(cookieParser(process.env.JWT_SECRET));
server.use(passport.initialize());
server.use(passport.session());
require('./config/passport')(passport);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
}

// Add routes, both API and view
server.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Start the API server
server.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.log(err);
  // eslint-disable-next-line no-console
  console.log(
    `Server is listening at: ${PORT} - Click Here => http://localhost:${PORT}`
  );
});
