const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema(
    {
        questionNumber: {
            type: Number,
            required: true,
        },
        response: [ ],
    },
    {
        timestamps: true,
    }
);

const Survey = mongoose.model("Survey Schema" , surveySchema);
module.exports = Survey;