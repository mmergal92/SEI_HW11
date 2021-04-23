const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  name: { type: String, required: true},
  title: String,
  hair_color: { type: String, default: "blonde"},
  eye_color: String,
  dob: Date,
  loves: Array,
  location: String,
  gender: String,
  victims:{type: Number, min: 0},
});

// var Vampire = {
// name: 'Chocula',
// title: 'Count',
// hair_color: 'brown',
// eye_color: 'brown',
// dob: new Date(1971, 2, 13, 7, 47),
// loves: ['cereal','marshmallows'],
// location: 'Minneapolis, Minnesota, US',
// gender: 'm',
// victims: 2,
// }

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;