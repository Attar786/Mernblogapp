import express from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from './routes/auth.route.js'
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

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Examplhe app listening on port ${port}`);
});

app.use("/api/user",userRoutes);
app.use('/api/auth', authRoutes);
app.use((err, req,res, next) =>
{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})