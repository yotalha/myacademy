const {Course} = require('../models');

const createCourse = async(req, res) => {
  try{
    const {code, description, ClassId} = req.body;
    const course = await Course.create({code, description, ClassId});
    res.send(course)
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const readCourse = async(req, res) => {
  try{
    const course = await Course.findAll();
    res.send(course);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const updateCourse = async(req, res) => {
  const {id} = req.params;
  try{
    await Course.update(req.body,{ where:{id: id} });
    res.send('Course is successfully updated');
  }
  catch(err){
    res.status(401),send(err);
  }
}

const deleteCourse = async(req, res) => {
  const {id} = req.params;
  try{
    await Course.destroy({where:{id: id}});
    res.send('Course is successfully deleted');
  }
  catch(err){
    res.status(401).send(err);
  }
}

const getSingleCourse = async(req, res) => {
  const {id} = req.params;
  try{
    const course = await Course.findAll({where:{id: id}});
    res.send(course);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

module.exports = {
  createCourse,
  readCourse,
  updateCourse,
  deleteCourse,
  getSingleCourse
};



