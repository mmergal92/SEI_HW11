/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI );

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/

//Adding Data
// Vampire.insertMany(seedData,(err, vampires) => {
//   if (err){ console.log(err)}
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });

//Creating more Data
// Vampire.create (
//  {
//     name: 'Veronica',
//     hair_color: 'brown',
//     eye_color: 'blue',
//     dob: new Date(1984, 2, 13, 9, 14),
//     loves: ['reading','cooking'],
//     location: 'Astoria, NY, US',
//     gender: 'f',
//     victims: 50
//   }
// )

// Vampire.create (
//   {
//      name: 'Mary',
//      hair_color: 'brown',
//      eye_color: 'blue',
//      dob: new Date(1995, 7, 11, 12, 30),
//      loves: ['piano','boxing', 'rice'],
//      location: 'Miami, FL, US',
//      gender: 'f',
//      victims: 50
//    }
//  )

//  Vampire.create (
//   {
//      name: 'Matt',
//      hair_color: 'brown',
//      eye_color: 'blue',
//      dob: new Date(1961, 1, 22, 11, 05),
//      loves: ['pasta','tomatoes'],
//      location: 'Boston, MA, US',
//      gender: 'm',
//      victims: 500
//    }
//  )

//  Vampire.create (
//   {
//      name: 'John',
//      hair_color: 'blonde',
//      eye_color: 'blue',
//      dob: new Date(1987, 3, 11, 5, 25),
//      loves: ['olives','golf'],
//      location: 'Brooklyn, NY, US',
//      gender: 'm',
//      victims: 5000
//    }
//  )
