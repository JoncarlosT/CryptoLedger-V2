const mongoose = require("mongoose");
const User = mongoose.model("user");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegisterInputs = require("../validation/register");
const validateLoginInputs = require("../validation/login");
const secretOrKey = require("../config/keys").secretOrKey;

const register = async (data) => {
  try {
    const { message, isValid } = validateRegisterInputs(data);

    if (!isValid) {
      throw new Error(message);
    }

    const { name, email, password } = data;

    existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("The email is already taken");
    }

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

    const id = user._doc._id;
    const token = jwt.sign({ id: user.id }, secretOrKey);

    return { token, loggedIn: true, ...user._doc, id, password: null };
  } catch (err) {
    throw err;
  }
};

const login = async (data) => {
  try {
    const { message, isValid } = validateLoginInputs(data);

    if (!isValid) {
      throw new Error(message);
    }

    const { email, password } = data;

    const user = await User.find({ email });
    console.log(user);

    if (!user) {
      throw new Error("This email hasn't been registered");
    }

    return { loggedIn: true };
  } catch (err) {}
};

module.exports = { login, register };
