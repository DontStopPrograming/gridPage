// Routers
const express = require('express')
const add = express()

app.get('/add',(req, res) => {
    res.send('Ready')
})


add.listen(5501, () => {
    console.log('Server Initial')
})

