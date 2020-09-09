const express = require('express')
const app = express()
const port = 3000

app.get('/api/filter', (req, res) => {
    const delay = req.query.delay || 0;
    setTimeout(() => {
        res.send({
            filter: req.query.filter || '',
            delay,
        })
    }, delay)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
