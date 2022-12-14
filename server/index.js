const express = require('express')
const cors = require('cors')
const server = express();
const db = require("./util/database")
const {Base, Favorite, Extra} = require('./util/models')

server.use(express.json())
server.use(cors())

//Associations
// Base.hasMany(Favorite)
// Favorite.belongsTo(Base)
// Extra.hasMany(Favorite)
// Favorite.belongsTo(Extra)

db.sync()

server.listen(4000, () => console.log('running on 4000, Happy Holidays!'))