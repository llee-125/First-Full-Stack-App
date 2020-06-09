const express = require("express");
const app = express();
const PORT = 7000;
const path = require("path");

// sets up server for incoming and outgoing datatypes (string, array, json)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

// sets up client side routes responsible for serving html
const clientRoutes = require("./routes/client-routes.js");
app.use(clientRoutes);

// sets up api routes for sending data to the client
const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

// runs server
app.listen(PORT, () => {
  console.log(`Can I do this? at http://localhost:${PORT}`);
});
