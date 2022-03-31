const User = require('../model/userSchema.js');

exports.createUser = async (req, res) => {
  try {
    const {username} = req.body;
    console.log(req.body)
    const user = await User.create({username: username, colorSchemes: []})
    res.send(user)
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

exports.fetchUserSchemes = async (req, res) => {
  try {
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(204);
  }
}

exports.renameScheme = async (req, res) => {
  try {
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

exports.createScheme = async (req, res) => {
  try {
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
