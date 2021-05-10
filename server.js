const express = require('express');
const app = express();
const db = require('./models');
const {User} = require('./models');

db.sequelize.sync();

app.use(express.json())

app.post('/insert', async(req, res) => {
  const {firstName, lastName} = req.body;
  try{
    const user = await User.create({firstName, lastName});
    res.send(user);
  }
  catch(err){
    res.status(401).send(err);
  }
})

app.get('/', async(req, res) => {
  try{
    const user = await User.findAll();
    res.send(user);
  }
  catch(err){
    res.status(401).send(err);
  }
})



app.listen(3000, () => {
  console.log('listening on port 3000!!!');
})

