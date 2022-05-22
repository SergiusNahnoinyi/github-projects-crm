import { validation } from "../middlewares/validationMiddleware.js";
import auth from "../middlewares/authMiddleware.js";
import { schema } from "../models/userModel.js";
import {
  signUp,
  logIn,
  logOut,
  getCurrentUser,
} from "../controllers/authController.js";

import express from "express";
const router = express.Router();

router.post("/signup", validation(schema), signUp);

router.post("/login", logIn);

router.delete("/logout", auth, logOut);

router.get("/current", auth, getCurrentUser);

export default router;
