var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

var Page = sequelize.define('page', {
  title: Sequelize.STRING,
  urlTitle: {type: Sequelize.TEXT,validate: {isUrl: true}},
  content: Sequelize.TEXT,
  status:Sequelize.BOOLEAN
  })
var User = sequelize.define('user', {
  name: Sequelize.STRING,
  email:{type: Sequelize.STRING, validate: {isEmail: true}}
  })
