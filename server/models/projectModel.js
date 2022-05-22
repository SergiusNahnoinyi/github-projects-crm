import { DataTypes, Model } from "sequelize";
import db from "../config/db.js";

class Project extends Model {}

const project = Project.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    proj_id: {
      type: DataTypes.INTEGER,
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    html_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    stargazers_count: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    forks: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    open_issues: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    created_at: {
      type: DataTypes.STRING(255),
    },
  },
  {
    sequelize: db,
    tableName: "projects",
    timestamps: true,
    createdAt: false,
  }
);

export default project;
