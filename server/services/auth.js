const mongoose = require("mongoose");
const User = mongoose.model("user");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegisterInputs = require("../validation/register");
const validateLoginInputs = require("../validation/login");
const keys = require("../config/keys");

const register = async (data) => {
  try {
    const { message, isValid } = validateRegisterInputs(data);

    if (!isValid) return new Error(message);

    const { name, email, password } = data;

    existingUser = await User.findOne({ email });

    if (existingUser) return new Error("The email is already taken");

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User(
      {
        name,
        email,
        password: hashPassword,
      },
      (err) => {
        if (err) throw err;
      }
    );

    user.save();

    const token = jwt.sign({ id: user._id }, keys.secretOrKey);

    return { token, loggedIn: true, ...user._doc, password: null };
  } catch (err) {
    throw err;
  }
};

const login = async (data) => {
  try {
    const { message, isValid } = validateLoginInputs(data);

    if (!isValid) return new Error(message);

    const { email, password } = data;

    const user = await User.findOne({ email });

    if (!user) return new Error("This email hasn't been registered");

    const isValidPassword = await bcrypt.compareSync(password, user.password);
    if (!isValidPassword) return new Error("Invalid password");

    const token = jwt.sign({ id: user.id }, keys.secretOrKey);

    return { token, loggedIn: true, ...user._doc, password: null };
  } catch (err) {}
};

const logout = async (data) => {
  try {
    const { _id } = data;
    const user = await User.findById(_id);

    if (!user) return new Error("This user doesn't exist");

    const token = "";

    return { token, loggedIn: false, ...user._doc, password: null };
  } catch (err) {
    throw err;
  }
};

const verifyUser = async (data) => {
  try {
    const { token } = data;

    const decoded = jwt.verify(token, keys.secretOrKey);
    const { id } = decoded;

    const loggedIn = await User.findById(id).then((user) => {
      return user ? true : false;
    });

    return { loggedIn };
  } catch (err) {
    throw err;
  }
};

module.exports = { register, login, logout, verifyUser };
