var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: 'string',
  email: 'string',
  password: 'string',
  stories:{
    name:'string',
    url:'string',
    likes:{type:Number}
  }
})

module.exports = mongoose.model('User', userSchema)