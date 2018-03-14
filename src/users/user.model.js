import mongoose, { Schema } from 'mongoose';
import pwHash from 'password-hash';

const userSchema = Schema({
  __v: {
    type: Number, 
    select: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    select: false
  }
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
