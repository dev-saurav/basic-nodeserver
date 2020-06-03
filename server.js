const express = require('express')
const app = express()

// //MIDDLEWARE
// app.use('/posts', () => {
//     console.log('this is middleware running')
// })

//ROUTES
app.get('/', (req, res) => {
    res.send('we are on home')
})

app.get('/posts', (req, res) => {
    res.send('we are on posts')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log(`Server is running on ${PORT}`)
})