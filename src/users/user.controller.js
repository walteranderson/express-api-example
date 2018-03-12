import User from './user.model';

export const getAll = (req, res) => {
  User.find()
    .select('-__v -password')
    .then((users) => {
      res.json(users);
    });
};

export const createUser = (req, res) => {
  const {
    email,
    password
  } = req.body;

  User.create({ email, password })
    .then((user) => {
      res.json(user);
    });
};
