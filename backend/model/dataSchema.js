const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema(
    {
        questionNumber : {
         type: Number ,
         required : true ,
        } ,  
       response : {
         type:Number ,
         required : true,
        } , 
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }               
    } , 
    {
        timestamps: true,
    }
) 

const Survey = mongoose.model("Survey Schema" , surveySchema);
module.exports = Survey;