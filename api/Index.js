const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const ListRoute = require("./routes/list");

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => 
console.log("DB Connection Successful")
).catch((err) => {
console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", ListRoute);

app.listen(8800, () => {
    console.log("Backend Server is running");
})