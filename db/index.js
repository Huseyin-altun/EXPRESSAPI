const mongoose = require('mongoose')
const mongoDB = 'mongodb+srv://root:21H.fuat@cluster0.godfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
    .connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db