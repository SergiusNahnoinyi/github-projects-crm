import User from "../models/user.js";
import express from "express";
const router = express.Router();

router.get("/signup", async (req, res) => {
  const users = await User.findAll({
    attributes: ["user_id", "name", "email"],
  });
  console.log(users);
  res.json({ message: { users } });
});

export default router;
