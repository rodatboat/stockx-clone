const express = require("express");
const axios = require("axios");
const app = express();

// require("dotenv").config();
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
