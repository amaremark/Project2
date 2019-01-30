const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userSchema  = new Schema({
  content: String,
  taskes:[
    {
     type: Schema.Types.ObjectId,
     ref: "Task"
    }
   ],
   author: {
    type: Schema.Types.ObjectId,
    ref: "Newtask"
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
//      ref: "Task"
//     }
//    ],
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   }
// });

 

module.exports = mongoose.model("User", userSchema);
