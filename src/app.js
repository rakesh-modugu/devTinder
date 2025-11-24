const express = require('express')

const app = express()

// app.use((req,res) => {
//     res.send("Hello from rakesh server ")
// })


// app.use('/data',(req,res) => {
//     res.json({name: "Rakesh", age: 24, city: "Bangalore"})
// })  

// app.use('/hello/3', (req,res) => {
//     res.send('hello are three')
// })



// app.use('/hello', (req,res) => {
//     res.send("Hello from /hello endpoint")
// })


// app.use('/xyz', (req,res)=> {
//     res.send('some xyz are there')
// })
// app.use('/',(req,res) => {
//     res.send("Hello from Rakesh server at root endpoint")


// })/


// app.get('/',(req,res) => {
//     res.send("Hello from Rakesh server at root endpoint")
// })

// app.get('/data',(req,res) => {
//     res.json({name: "Rakesh", age: 24, city: "Bangalore"})
// })

// app.post('/data',(req,res) => {
//     res.json({message: "This is a POST request at /data endpoint"})
// })

// app.put('/data',(req,res) => {
//     res.json({message: "This is a PUT request at /data endpoint"})
// })

// app.delete('/data',(req,res) => {
//     res.json({message: "This is a DELETE request at /data endpoint"})
// })
// app.patch('/data',(req,res) => {
//     res.json({message: "This is a PATCH request at /data endpoint"})
// })

app.use('/user',(req,res, next) => {
    //res.send('1 Response!')
    // console.log('This is user endpoint')
    next()
},(
req,res) => {
    res.send('2nd response!')
}
 )


app.listen(3000,() => {
    console.log(`Server is running on port 3000: http://localhost:3000`);
})