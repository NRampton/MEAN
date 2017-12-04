const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email address is required"], validate: [{
    validator: (address) => { return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(address);},
    message: "The email address you entered was not valid." 
  }]},
  first_name: { type: String, required: [true, "A first name is required for registration."], minlength: 2},
  last_name: { type: String, required: [true, "A last name is required for registration."], minlength: 2},
  password: {type: String, required: true, minlength: 8},
  // confirm_password: { type: String, required: true, minlength: 8},
  birthday: { type: String, required: true},
}, {timestamps: true});


UserSchema.methods.encryptPassword = (input) => {
  bcrypt.hash('input', 10)
  .then(hashed_password => {
    return hashed_password;
  })
  .catch(error => {
    return (error);
  })
}

UserSchema.pre('save', (done) => {
  this.password = this.encryptPassword(this.password);
  done();
});

module.exports = mongoose.model('User', UserSchema);