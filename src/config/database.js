const mongoose = require('mongoose')


const connectDb = async () => {
    await mongoose.connect("mongodb+srv://rakeshmodugu94_db_user:k50HBkRcdz6ubydH@cluster0.uuxyrx2.mongodb.net/namaste-node?appName=Cluster0")

}
module.exports = connectDb
// mongodb+srv://rakeshmodugu94_db_user:k50HBkRcdz6ubydH@cluster0.uuxyrx2.mongodb.net/?appName=Cluster0