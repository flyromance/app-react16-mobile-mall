var express = require('express')
var app = express()

var data = require('./data.js')

// 会乱码
app.get('/api/ad', function (req, res) {
    res.end(JSON.stringify(data.ad))
})

app.listen(8002, function () {
    console.log('server start on 8002')
})