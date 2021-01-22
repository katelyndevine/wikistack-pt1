const morgan = require("morgan");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { db, Page, User } = require("./models");

db.authenticate().then(() => {
  console.log("connected to the database");
});

const app = express();

const staticMiddleware = express.static(path.join(__dirname, "public"));

app.use(morgan("dev"));
app.use(staticMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  res.send("hello world");
});

const PORT = 1330;

const populate = async () => {
  await db.sync({ force: true });
  console.log("DB synced!!!");
  // await Page.sync();
  // console.log("Page table has sunk!");
  // await User.sync();
  // console.log("User table has sunk");

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

populate();
