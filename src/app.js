const express = require('express')
const app = express()
const connectDB = require('./config/database')



app.post('/signup', async(req,res) =>{
  const user = new User ({
    fristName: 'rakesh',
    lastName: 'Modugu',
    emailId: 'rkaesh@gamil.com',
    password:'rakesh@123'

  })
  try{
    await user.save()


  }catch(error){

    res.status(400).send('error saving the user', err.message)
  }
})


connectDB()
  .then(() => {
    console.log("Database connection established...");
   app.listen(3000, () => {
    console.log('serve is running')
   })
  })
  .catch((err) => {
    console.error("Database cannot be connected!!",err);
  });

  