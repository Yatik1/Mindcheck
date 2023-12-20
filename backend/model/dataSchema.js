const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema(
    {
        questionNumber: {
            type: Number,
            required: true,
        },
        response: [{
            type: Number,
            required: true,
        }],
    },
    {
        timestamps: true,
    }
);

const Survey = mongoose.model("Survey Schema" , surveySchema);
module.exports = Survey;