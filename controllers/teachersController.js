const {Teacher} = require('../models');

const createTeacher = async(req, res) => {
  try{
    const {name, education, specialization} = req.body;
    const teacher = await Teacher.create({name, education, specialization});
    res.send(teacher)
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const readTeacher = async(req, res) => {
  try{
    const teacher = await Teacher.findAll();
    res.send(teacher);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const updateTeacher = async(req, res) => {
  const {id} = req.params;
  try{
    await Teacher.update(req.body,{ where:{id: id} });
    res.send('Teacher is successfully updated');
  }
  catch(err){
    res.status(401),send(err);
  }
}

const deleteTeacher = async(req, res) => {
  const {id} = req.params;
  try{
    await Teacher.destroy({where:{id: id}});
    res.send('Teacher is successfully deleted');
  }
  catch(err){
    res.status(401).send(err);
  }
}

const getSingleTeacher = async(req, res) => {
  const {id} = req.params;
  try{
    const teacher = await Teacher.findAll({where:{id: id}});
    res.send(teacher);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

module.exports = {
  createTeacher,
  readTeacher,
  updateTeacher,
  deleteTeacher,
  getSingleTeacher
};



