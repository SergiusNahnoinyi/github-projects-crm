import User from "../models/userModel.js";
import { validation } from "../middlewares/validationMiddleware.js";
import auth from "../middlewares/authMiddleware.js";
import { signUp, logIn, logOut } from "../controllers/authController.js";
import { schema } from "../models/userModel.js";

import express from "express";
const router = express.Router();

router.post("/signup", validation(schema), signUp);

router.post("/login", logIn);

router.delete("/logout", auth, logOut);

export default router;
