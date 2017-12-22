const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors")

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// localhost:7000/flickr
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/flickr",
    {useMongoClient: true},
    err => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.use("/flickr", require("./routes/imageRoutes"));

app.listen(port, () => {
    console.log(`Server is listening on port ${port} starting at ${new Date()}`);
});
