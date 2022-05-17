import User from "../models/userModel.js";
import { validation } from "../middlewares/validationMiddleware.js";
import { signUp } from "../controllers/authController.js";
import { schema } from "../models/userModel.js";

import express from "express";
const router = express.Router();

router.post("/signup", validation(schema), signUp);

export default router;
