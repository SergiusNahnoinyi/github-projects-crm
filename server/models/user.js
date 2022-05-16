import { Sequelize } from "sequelize";
import sequelize from "../config/db.js";

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
  }
);

(async () => {
  console.log("Database connected successfully");
  await sequelize.sync();
})();

export default User;
