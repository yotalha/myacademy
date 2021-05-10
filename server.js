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

app.put('/update/:id', async(req, res) => {
  const {id} = req.params;
  try{
    const user = await User.update(req.body,{ where:{id: id} });
    res.send(`user with id ${user} has been updated`)
  }
  catch(err){
    res.status(401),send(err);
  }
})

app.delete('/delete/:id', async(req, res) => {
  const {id} = req.params;
  try{
    const user = await User.destroy({where:{id: id}});
    res.send(`user with id ${user} has been deleted`);
  }
  catch(err){
    res.status(401).send(err);
  }
})


app.listen(3000, () => {
  console.log('listening on port 3000!!!');
})

