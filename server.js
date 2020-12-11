
const express = require('express');
const app = express();
const cors = require('cors')

let PORT = process.env.PORT || 3000;

app.use(cors())
app.listen(PORT, () => {
    console.log(`Server connected to ${PORT} ....`)
})

app.use(express.json());

// starting point 
app.use('/', require('./routes/index')); 