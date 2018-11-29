const dbManager = require('./dbManager');
const bodyParser = require('body-parser');
const path = '../views/index.pug';
const initRoutes = require("../app/routes");
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

// serves all static files in /public
app.use(express.static(`${__dirname}/../public`));
const port = process.env.PORT || 8002;
const server = require('http').Server(app);
app.set("view engine", "pug");

// start server
server.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});
dbManager();
initRoutes(app);


