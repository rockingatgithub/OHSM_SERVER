const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/OHSMDB")

const db = mongoose.connection

db.once('open', () => {
    console.log("Database connected successfully!")
})

module.exports = db