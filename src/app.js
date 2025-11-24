const express = require('express')

const app = express()

app.use((req,res) => {
    res.send("Hello from rakesh server ")
})


app.use('/data',(req,res) => {
    res.json({name: "Rakesh", age: 24, city: "Bangalore"})
})  

app.listen(3000,() => {
    console.log(`Server is running on port 3000: http://localhost:3000`);
})