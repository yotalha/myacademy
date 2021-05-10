const express = require('express');
const app = express();
const db = require('./models');
// const {User} = require('./models');

db.sequelize.sync();

app.use(express.json())



app.listen(3000, () => {
  console.log('listening on port 3000!!!');
})

