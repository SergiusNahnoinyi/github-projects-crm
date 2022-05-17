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
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export const schema = Joi.object({
  name: Joi.string().min(3).max(8).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(3).max(8).required(),
});

(async () => {
  console.log("Database connected successfully");
  await sequelize.sync();
})();

export default User;
