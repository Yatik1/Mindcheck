const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors");
const Database = require('./model/dataSchema')

const dotenv = require('dotenv');
dotenv.config();

const PORT = 8000;


const app = express()
app.use(express.json());

app.use(cors())

app.get('/'  , (req,res) => {
    return res.status(234).send("Server is on ! ")
})
app.get('/questions'  , (req,res) => {
    return res.status(234).send("Welcome to mindcheck server ! ")
})
app.post('/questions' , async (req,res) => {
     try {
        if(
            !req.body.questionNumber ||
            !req.body.response 
        ) {
            return response.status(400).send({message: 'Sends all the required fields'})
        }
        const surveyResponse = {
            questionNumber :req.body.questionNumber,
            response : req.body.response, 
        };

        const newResponses = await Database.create(surveyResponse)
        return res.status(201).send(newResponses)

     } catch(error) {
        console.log(error.message);
        res.status(500).send({message : error.message})
     }
} )


mongoose.connect(process.env.URI , {
    useUnifiedTopology:true,
    useNewUrlParser:true
})
    .then(() => {
     console.log("database is connected !")
     app.listen(PORT , () => {
    console.log(`App is listening to the port : ${PORT}`)  
})
    })
   .catch((err) => {
    console.log(err);
   })