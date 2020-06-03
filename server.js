const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const postsRoute = require('./routes/posts')
require('dotenv/config')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes
app.use('/posts', postsRoute)

//connnect to db
mongoose.connect(process.env.mongoDBURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to db")
    })

const PORT = process.env.PORT || 8080
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server is running on ${PORT}`)
})
