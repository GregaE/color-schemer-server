const User = require('../model/userSchema.js');

exports.createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.create({ username: username, colorSchemes: [] });
    res.send(user)
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

exports.fetchUserSchemes = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.user_id });
    res.send(user.colorSchemes)
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(204);
  }
}


exports.createScheme = async (req, res) => {
  try {
    const scheme = req.body;
    const user = await User.findOneAndUpdate({ _id: req.params.user_id }, {
      $push: {
        "colorSchemes": {
          name: scheme.name,
          colors: scheme.colors
        }
      },
    },
    {
      new: true
    })
    res.send(user)
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

exports.renameScheme = async (req, res) => {
  try {
    const { id, newName } = req.body;
    const user = await User.updateOne({ _id: req.params.user_id, 'colorSchemes._id': id }, {
      $set: {
        'colorSchemes.$.name': newName,
      },
    },
    {
      new: true
    })
    res.send(user)
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

exports.deleteScheme = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.updateOne({
      "_id": req.params.user_id
    },
    {
      $pull: {
        colorSchemes: { _id: id }
      }
    });
    res.send(user)
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
