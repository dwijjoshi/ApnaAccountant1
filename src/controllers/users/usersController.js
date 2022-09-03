const User = require("../../model/User");
const expressAsyncHandler = require("express-async-handler");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { email, firstName, lastName, password } = req?.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Error("User already exists");
  }
  try {
    const user = await User.create({ email, firstName, lastName, password });
    res.status(200).json(user);
  } catch (error) {
    res.json(error.message);
  }
});

const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

module.exports = { registerUser, fetchUsersCtrl };
