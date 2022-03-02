const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("default route"));
const usersR = require("./src/routes/users");

const port = process.env.PORT || 4000;

app.use(usersR);

app.listen(port, () => {
  console.log("app is listening on:", port);
});
