import { DataTypes, Model } from "sequelize";
import Joi from "joi";

import db from "../config/db.js";
import Project from "./projectModel.js";

class User extends Model {}

const user = User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export const schema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(3).max(40).required(),
});

user.hasMany(Project, { as: "projects", foreignKey: "user_id" });

export default user;
