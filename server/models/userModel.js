import { Sequelize } from "sequelize";
import sequelize from "../config/db.js";
import Joi from "joi";

const User = sequelize.define(
  "users",
  {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
  },
  {
    freezeTableName: true,
  }
);

export const schema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(3).max(40).required(),
});

(async () => {
  console.log("Database connected successfully");
  await sequelize.sync();
})();

export default User;
