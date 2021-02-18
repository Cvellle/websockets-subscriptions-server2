const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* defining users Schema */
const message = new Schema({
  text: {
    type: String,
  },
  channel: {
    type: String,
  },
  sender: {
    type: String,
  },
});

module.exports = mongoose.model("user_details", message);

// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// /* defining users Schema */
// const userDetails = new Schema({
//     username: {
//         type: String
//     },
//     age: {
//         type: Number
//     },
//     blood_group: {
//         type: String
//     },
//     nationality: {
//         type: String
//     },
//     contact_no: {
//         type: Number
//     }
// });

// module.exports = mongoose.model('user_details', userDetails);
