const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userSchema  = new Schema({
  content: String,
  recipes:[
    {
     type: Schema.Types.ObjectId,
     ref: "Recipe"
    }
   ],
   author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});


  
// const userSchema  = new Schema({
//   content: String,
//   ingredients: String,
//   recipes:[
//     {
//      type: Schema.Types.ObjectId,
//      ref: "Recipe"
//     }
//    ],
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   }
// });

 

module.exports = mongoose.model("User", userSchema);
