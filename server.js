const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World with Cong Thai')
})

app.get('/about', (req, res) => {
    res.send('Hello World with Cong Thai Meo Meo')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})