const {Assesment} = require('../models');

const createAssesment = async(req, res) => {
  try{
    const {description, code, TeacherId, CourseId} = req.body;
    const assesment = await Assesment.create({description, code, TeacherId, CourseId});
    res.send(assesment)
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const readAssesment = async(req, res) => {
  try{
    const assesment = await Assesment.findAll();
    res.send(assesment);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const updateAssesment = async(req, res) => {
  const {id} = req.params;
  try{
    await Assesment.update(req.body,{ where:{id: id} });
    res.send('Assesment is successfully updated');
  }
  catch(err){
    res.status(401),send(err);
  }
}

const deleteAssesment = async(req, res) => {
  const {id} = req.params;
  try{
    await Assesment.destroy({where:{id: id}});
    res.send('Assesment is successfully deleted');
  }
  catch(err){
    res.status(401).send(err);
  }
}

const getSingleAssesment = async(req, res) => {
  const {id} = req.params;
  try{
    const assesment = await Assesment.findAll({where:{id: id}});
    res.send(assesment);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

module.exports = {
  createAssesment,
  readAssesment,
  updateAssesment,
  deleteAssesment,
  getSingleAssesment
};



