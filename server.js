const express = require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/user');
const {Class, Course} = require('./models')
// const {User} = require('./models');

db.sequelize.sync();

app.use(express.json())

app.use('/users', userRoutes);

app.post('/classes', async(req, res) => {
  try{
    const {code, block} = req.body;
    const newClass = await Class.create({code, block});
    res.send(newClass)
  }
  catch(err){
    res.send('error', err);
  }
})

app.get('/classes', async(req, res) => {
  try{
    const myClass = await Class.findAll();
    res.send(myClass);
  }
  catch(err){
    res.send('error', err);
  }
})

app.post('/courses', async(req, res) => {
  try{
    const {code, description, ClassId} = req.body;
    const course = await Course.create({code, description, ClassId});
    res.send(course)
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.get('/courses', async(req, res) => {
  try{
    const course = await Course.findAll();
    res.send(course);
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.listen(3000, () => {
  console.log('listening on port 3000!!!');
})

