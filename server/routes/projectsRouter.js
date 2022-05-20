import Project from "../models/projectModel.js";
import auth from "../middlewares/authMiddleware.js";
import {
  addProject,
  updateProject,
  deleteProject,
} from "../controllers/projectsController.js";

import express from "express";
const router = express.Router();

router.post("/", auth, addProject);

router.patch("/:projectId", auth, updateProject);

router.delete("/:projectId", auth, deleteProject);

export default router;
