const {Student} = require('../models');

const createStudent = async(req, res) => {
  try{
    const {firstName, lastName, dob, address} = req.body;
    const student = await Student.create({firstName, lastName, dob, address});
    res.send(student)
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const readStudent = async(req, res) => {
  try{
    const student = await Student.findAll();
    res.send(student);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const updateStudent = async(req, res) => {
  const {id} = req.params;
  try{
    await Student.update(req.body,{ where:{id: id} });
    res.send('Student is successfully updated');
  }
  catch(err){
    res.status(401),send(err);
  }
}

const deleteStudent = async(req, res) => {
  const {id} = req.params;
  try{
    await Student.destroy({where:{id: id}});
    res.send('Student is successfully deleted');
  }
  catch(err){
    res.status(401).send(err);
  }
}

const getSingleStudent = async(req, res) => {
  const {id} = req.params;
  try{
    const student = await Student.findAll({where:{id: id}});
    res.send(student);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

module.exports = {
  createStudent,
  readStudent,
  updateStudent,
  deleteStudent,
  getSingleStudent
};



