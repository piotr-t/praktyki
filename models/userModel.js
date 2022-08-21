const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = mongoose.Schema({
    first_name: {type: String, trim: true, require: true},
    last_name: {type: String, trim: true, require: true},
    login: {type: String, trim: true, require: true},
    likes: [String],
    dislikes: [String],
    role:  {type: String, default: 'USER'},
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        require: true
    }
  }, {
    timestamps: true
  });

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
const User =  mongoose.model('User', UserSchema);

module.exports = User;