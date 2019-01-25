import AuthService from './auth.service'

/**
 * Authenticate a user using email and password.
 * Return a JWT token on success.
 */
export default (req, res) => {
  const { email, password } = req.body

  AuthService.validate(email, password)
    .then((user) => {
      res.send(AuthService.generateToken(user._id))
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(400)
    })
}
