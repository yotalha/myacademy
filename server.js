const express = require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/user');
// const {User} = require('./models');

db.sequelize.sync();

app.use(express.json())

app.use('/users', userRoutes);


app.listen(3000, () => {
  console.log('listening on port 3000!!!');
})

