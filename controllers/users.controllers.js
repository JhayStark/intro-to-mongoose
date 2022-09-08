const getUser = (req, res) => {
  res.status(200).send("Get user");
};
const createUser = (req, res) => {
  res.status(200).send("Created user");
};
const deleteUser = (req, res) => {
  res.status(200).send("Deleted user");
};
const updateUser = (req, res) => {
  res.status(200).send("Updated user");
};
const getAllUsers = (req, res) => {
  res.status(200).send("Get all users");
};

module.exports = {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
};
