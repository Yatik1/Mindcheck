// const mongoose = require('mongoose')

// const surveySchema = new mongoose.Schema(
//     {
//         questionNumber : {
//          type: Number ,
//          required : true ,
//         } ,  
//        response : {
//          type:Number ,
//          required : true,
//         } , 
//         user: {
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"User",
//         }               
//     } , 
//     {
//         timestamps: true,
//     }
// ) 

// const Survey = mongoose.model("Survey Schema" , surveySchema);
// module.exports = Survey;



const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
    required: true
  },
  response: {
    type: String,
    required: true
  }
});

const surveySchema = new mongoose.Schema({
  responses: [responseSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
