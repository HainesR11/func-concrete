const User = require('../model/UserModel');
const CatchAsync = require('../utils/Async').default;

exports.SignUp = CatchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    Status: 'Success',
    User: newUser,
  });
});
