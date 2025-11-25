const mongoose = require('mongoose')

const userSechema = new mongoose.Schema({
    fristName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
})

const usermodel = mongoose.model('User', userSechema)

module.export = mongoose.model(usermodel)