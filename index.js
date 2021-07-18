const express = require("express");
const bodyParser = require("body-parser");
//importing Routes
const UsersRoutes = require("./app/routes/usersRouter")

console.log('In Index.js')

const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json());

//Forward all routes 
app.use("/users", UsersRoutes);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Do IT Now Rest API - Node.JS Express Server And MySQL" });
});

// set port, listen for requests
app.listen(8090, () => {
    console.log("Server is running on port 8090.");
});