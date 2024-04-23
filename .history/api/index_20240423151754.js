import express from "express";
import mongoose from "mongoose";
mongoose
  .connect(
    process.env.MONGOdb
  )
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
