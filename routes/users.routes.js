const router = require("express").Router;
const {
  createUser,
  deleteUser,
  getUser,
  updateUser,
  getAllUsers,
} = require("../controllers/users.controllers");

const userRouter = router();

userRouter.route("/").post(createUser).get(getAllUsers);
userRouter.route("/:userId").get(getUser).delete(deleteUser).patch(updateUser);

module.exports = userRouter;
