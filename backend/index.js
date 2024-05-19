const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors");
const Database = require('./model/dataSchema')
const User = require("./model/userSchema")

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express()
app.use(express.json());

app.use(cors())

app.post('/form' , async(req,res) => {
    try {
        const {fullName , semester} = req.body
        if(!fullName || !semester) {
            return res.status(400).send({message: 'Sends all the required fields'})
        }

        const userFields = {
            fullName,
            semester
        };

        const newUser = await User.create(userFields)
        return res.status(201).send(newUser)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message : error.message}) 
    }
})



app.get('/'  , (req,res) => {
    return res.status(234).send("Server is on ! ")
})
app.get('/questions'  , (req,res) => {
    return res.status(234).send("Welcome to mindcheck server ! ")
})

app.get("/form" , (req,res) => {
    res.send("Form are connected to the backend ! ")
})

// app.post('/questions' , async (req,res) => {
//      try {
//         if(
//             !req.body.questionNumber ||
//             !req.body.response 
//         ) {
//             return response.status(400).send({message: 'Sends all the required fields'})
//         }
//         const surveyResponse = {
//             questionNumber :req.body.questionNumber,
//             response : req.body.response, 
//         };

//         const newResponses = await Database.create(surveyResponse)
//         return res.status(201).send(newResponses)

//      } catch(error) {
//         console.log(error.message);
//         res.status(500).send({message : error.message})
//      }
// } )

app.post('/questions' , async (req,res) => {
    try {
        const { responses } = req.body;

        console.log({responses})
    
        if (!responses || !Array.isArray(responses) || responses.length === 0) {
          return res.status(400).json({ message: 'Invalid responses data' });
        }
    
        const survey = new Survey({ responses });
        await survey.save();
    
        res.status(201).json({ message: 'Responses saved successfully', survey });
      } catch (error) {
        console.error('Error saving responses:', error);
        res.status(500).json({ message: 'Server error' });
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