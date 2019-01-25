import User from './user.model'

/**
 * Get all users
 */
export const getAll = (req, res) => {
  User.find()
    .then((users) => {
      res.json(users)
    })
}

/**
 * Get user by ID
 */
export const getById = (req, res) => {
  const id = req.params.id

  User.findById(id)
    .then((user) => {
      res.json(user)
    })
}

/**
 * Create a new user
 */
export const create = (req, res) => {
  const {
    email,
    password
  } = req.body

  User.create({ email, password })
    .then((user) => {
      res.json(user)
    })
}

/**
 * PUT
 * Edit an existing user
 */
export const edit = (req, res) => {
  const _id = req.params.id
  const body = req.body

  User.findOneAndUpdate({ _id }, body)
    .then((user) => {
      res.json(user)
    })
}

/**
 * Delete user by ID
 */
export const destroy = (req, res) => {
  const _id = req.params.id

  User.remove({ _id })
    .then(() => {
      res.sendStatus(204)
    })
}
