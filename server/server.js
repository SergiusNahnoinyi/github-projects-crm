import router from "./routes/authRouter.js";
import sequelize from "./config/db.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", router);

app.use((req, res) => {
  res.status(404).json({
    status: "Error",
    code: 404,
    message: `Use api on routes: 
    POST /api/auth/signup - sign up user { email, password}
    POST /api/auth/signin - log in user { email, password }`,
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

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
