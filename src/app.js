const express = require('express')



const app = express()

const {adminAuth, userAuth} = require('./middleware/auth')
app.use(adminAuth)
app.use(userAuth)



app.get('/post' , userAuth,(req,res) => {
    res.send('user was upload a post ')
})

app.get('/admin/getAlldata', adminAuth,(req,res) => {
    res.send('all data deleted')
})

app.post('/Admin/login',(req,res) => {
    res.send('user logged in')
})

app.get('/Admin', (res,req) => {
    res.send('user data')
})


app.listen(3000,() => {
    console.log(`Server is running on port 3000: http://localhost:3000`);
})