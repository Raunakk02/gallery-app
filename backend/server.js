const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

///////////////////////////////// MONGODB //////////////////////////////////
const uri = process.env.MONGO_URL;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB connection established successfully");
});

///////////////////////////////// APP ROUTES ///////////////////////////////

const imagesRouter = require("./routes/image");

app.use("/", imagesRouter);

app.listen(port, function () {
	console.log(`Server running on port: ${port}`);
});
