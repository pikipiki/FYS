var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    User = require('./backend/models.js')

app.use(bodyParser.json())
app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/app', express.static(__dirname + '/src/app'))
app.use('/css', express.static(__dirname + '/src/css'))
app.use('/common', express.static(__dirname + '/src/app/common'))
app.use('/components', express.static(__dirname + '/src/app/components'))

mongoose.connect('mongodb://robagro4granpeti:rovkw3jgn9@jello.modulusmongo.net:27017/ytyriN4e')

app.post('/login', (req, res) => {
  var typedEmail = req.body.email['$modelValue'],
      typedPass = req.body.password['$modelValue']

  console.log(typedEmail, typedPass)

  // var login => (err, user) {
  //   if (user) {

  //   }

  // }

  // User.findOne('email', login)

})

app.route('/*').get((req, res) => res.sendFile(`${__dirname}/src/index.html`))
app.listen(8080)
