import User from "../models/userModel.js";
import bCrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await User.findOne({
    where: {
      email: email,
    },
  });
  if (userEmail) {
    return res.status(409).json({
      message: "Email is already in use",
      code: 409,
      data: "Conflict",
    });
  }
  try {
    const salt = await bCrypt.genSalt();
    const hashPassword = await bCrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(201).json({ message: "Signed up", code: 201, data: { user } });
  } catch (error) {
    next(error);
  }
};
