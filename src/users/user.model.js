import mongoose, { Schema } from 'mongoose';
import pwHash from 'password-hash';

const userSchema = Schema({
    email: { type: String, required: true },
    password: String
});

userSchema.pre('save', function(next) {
  if (!this.isNew) return next();

  this.password = this.generateHash(this.password);
  next();
});

userSchema.methods.generateHash = function(password) {
  return pwHash.generate(password);
};

userSchema.methods.verifyPassword = function(password) {
  return pwHash.verify(password, this.password);
};

export default mongoose.model('User', userSchema);
