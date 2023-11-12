import express from "express";
import "./db/mongooseClient.js";
import studentRouter from "./routes/studentRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const port = process.env.PORT || 24601;

app.get("/", (req, res) => res.send("It's time for MongoDB with Mongoose!"));

app.use("/students", studentRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
