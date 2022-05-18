import User from "../models/userModel.js";
import bCrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

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

export const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(400).json({
      message: "Email is wrong",
      code: 400,
      data: "Unauthorized",
    });
  }
  const validPassword = bCrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(400).json({
      message: "Password is wrong",
      code: 400,
      data: "Unauthorized",
    });
  }
  try {
    const token = jwt.sign(
      {
        id: user.id,
      },
      secret,
      { expiresIn: "1h" }
    );

    await User.update(
      { token: token },
      {
        where: {
          id: user.id,
        },
      }
    );

    return res.json({
      message: "Success",
      code: 200,
      token,
      email,
    });
  } catch (error) {
    next(error);
  }
};
