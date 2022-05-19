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
      name: user.name,
      email,
    });
  } catch (error) {
    next(error);
  }
};

export const logOut = async (req, res, next) => {
  const { id } = req.user;
  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Not authorized" });
    }
    await User.update(
      { token: null },
      {
        where: {
          id: user.id,
        },
      }
    );
    return res.status(204).json();
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (req, res, next) => {
  const { id } = req.user;
  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    return res.json({
      message: "Success",
      code: 200,
      token: user.token,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};
