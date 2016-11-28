var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

app.use(bodyParser.json())
app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/src', express.static(__dirname + '/src'))
app.use('/app', express.static(__dirname + '/src/app'))
app.use('/common', express.static(__dirname + '/src/app/common'))
app.use('/components', express.static(__dirname + '/src/app/components'))

// mongoose.connect('mongodb://robagro4granpeti:rovkw3jgn9@jello.modulusmongo.net:27017/ytyriN4e')
app.route('/*').get((req, res) => res.sendFile(`${__dirname}/src/index.html`))
app.listen(8080)