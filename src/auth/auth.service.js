import User from '../users/user.model';
import jwt from 'jsonwebtoken';

const AUTH_KEY = process.env.AUTH_KEY;

export default {
  /**
   * Validate against email/password
   */
  validate(email, password) {
    return User.findOne({ email })
      .then((user) => {
        if (!user || !user.verifyPassword(password)) {
          throw new Error;
        }

        return user;
      });
  },

  /**
   * Generate JWT token
   */
  generateToken(id) {
    return jwt.sign({ id }, AUTH_KEY, { expiresIn: '2 days' });
  },

  /**
   * Verify a generated JWT token
   */
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, AUTH_KEY, (err, decoded) => {
        if (err) {
          return reject(err);
        }

        resolve(decoded);
      });
    });
  }
}
