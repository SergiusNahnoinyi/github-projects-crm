import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import db from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import projectsRouter from "./routes/projectsRouter.js";
import("./config/passport.js");

// const PORT = process.env.DB_PORT || 5000;
const PORT = process.env.NODE_DOCKER_PORT || 8080;
const ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:8081";

const corsOptions = { origin: ORIGIN };

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/projects", projectsRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "Error",
    code: 404,
    message: `Use api on routes: 
    POST /api/auth/signup - sign up user { email, password}
    POST /api/auth/login - log in user { email, password }`,
    data: "Not found",
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: "Fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

db.sync()
  .then(() => {
    app.listen(PORT, function () {
      console.log("Database connected successfully!");
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server is not running. Error message: ${err.message}!`);
    db.close();
  });
