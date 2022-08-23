const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello there',
        app: 'ConcreteAPI'
    })
})

const port = 3000
app.listen( port , () => {
    console.log(`app running on port ${port}`);
})
