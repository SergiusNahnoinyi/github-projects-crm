import { Sequelize } from "sequelize";
import sequelize from "../config/db.js";

const Project = sequelize.define(
  "projects",
  {
    owner: {
      type: Sequelize.STRING,
    },
    repo: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    stars: {
      type: Sequelize.STRING,
    },
    forks: {
      type: Sequelize.STRING,
    },
    issues: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  console.log("Database connected successfully");
  await sequelize.sync();
})();

export default Project;
