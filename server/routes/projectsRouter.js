import auth from "../middlewares/authMiddleware.js";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../controllers/projectsController.js";

import express from "express";
const router = express.Router();

router.get("/", auth, getProjects);

router.post("/", auth, addProject);

router.patch("/:projectId", auth, updateProject);

router.delete("/:projectId", auth, deleteProject);

export default router;
