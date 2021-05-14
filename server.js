const express = require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/user');
const {Class, Course, Assesment, Teacher, Result, Student} = require('./models')
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
    console.log(course[0].dataValues.ClassId);
    res.send(course);
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.post('/teachers', async(req, res) => {
  try{
    const {name, education, specialization} = req.body;
    const teacher = await Teacher.create({name, education, specialization});
    res.send(teacher)
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.get('/teachers', async(req, res) => {
  try{
    const teacher = await Teacher.findAll();
    res.send(teacher);
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.post('/assesments', async(req, res) => {
  try{
    const {description, code, TeacherId, CourseId} = req.body;
    const assesment = await Assesment.create({description, code, TeacherId, CourseId});
    res.send(assesment)
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.get('/assesments', async(req, res) => {
  try{
    const assesment = await Assesment.findAll();
    res.send(assesment);
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.post('/students', async(req, res) => {
  try{
    const {firstName, lastName, dob, address} = req.body;
    const student = await Student.create({firstName, lastName, dob, address});
    res.send(student)
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.get('/students', async(req, res) => {
  try{
    const student = await Student.findAll();
    res.send(student);
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.post('/results', async(req, res) => {
  try{
    const {AssesmentId, StudentId, marksObtained} = req.body;
    const result = await Result.create({AssesmentId, StudentId, marksObtained});
    res.send(result)
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.get('/results', async(req, res) => {
  try{
    const result = await Result.findAll();
    res.send(result);
  }
  catch(err){
    res.status(401).send('error', err);
  }
})

app.listen(3000, () => {
  console.log('listening on port 3000!!!');
})

