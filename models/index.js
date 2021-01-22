const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:1330/wikistack"), {
  // logging: false
});

//blueprints of the models
const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
  },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

module.exports = {
  db,
  Page,
  User,
};
