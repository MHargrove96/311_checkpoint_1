const users = require("../data/index");

const listUsers = (req, res) => {
  console.log("in the GET /users request for all users");
  console.log(users);
  res.json(users);
};

const showUser = (req, res) => {
  console.log("in the /users request for a user by id");
  const id = users.find((data) => data.id == req.params.id);
  console.log(id);
  res.json(id);
};

const createUser = (req, res) => {
  console.log("in the POST /users request");
  let counter = users.length + 1;
  const newUser = {
    id: counter,
    ...req.body,
    /*Using the spread operator above*/
  };
  users.push(newUser);
  res.json(newUser);
};

const updateUser = (req, res) => {
  console.log("in the Put request for /users");
  const { id } = req.params;
  const user = users.find((data) => data.id === +id);
  const userIndex = users.findIndex((u) => u.id === +id);
  console.log(userIndex);
  const updatedUser = {
    ...user,
    ...req.body,
  };
  users.splice(userIndex, 1, updatedUser);
  console.log(users);
  //   console.log(updatedUser);
  res.json(updatedUser);
};

const deleteUser = (req, res) => {
  console.log("in the DELETE request in /users");
  //   const id = users.find((data) => data.id == req.params.id);
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id === +id);
  console.log(userIndex, "This is the index of the user you entered");
  if (!id) {
    res
      .status(404)
      .json({ message: "The user you are looking for does not exist." });
  }
  users.splice(userIndex, 1);
  res.json(users);
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };
