import express from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();
mongoose
  .connect(process.env.Mongodb)
  .then(() => {
    console.log("Mongo conncted");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Examplhe app listening on port ${port}`);
});

app.use("/api/user",userRoutes);