import AuthService from '../auth/auth.service';
import User from '../users/user.model';

/**
 * Authenticate against JWT token in header.
 */
export default (req, res, next) => {
  if (! req.headers.authorization) {
    return res.sendStatus(401);
  }

  const token = req.headers.authorization.split(' ')[1];

  if (! token) {
    return res.sendStatus(401);
  }

  AuthService.verifyToken(token)
    .then((decoded) => User.findById(decoded.id))
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.send(401);
    });
};
