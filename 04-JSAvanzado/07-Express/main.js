'use strict';

const express = require('express');
const app = express()

app.use(cors({origin: 'http://localhost:5500'}))
app.options('*', cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)