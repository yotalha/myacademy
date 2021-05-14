const {Result} = require('../models');

const createResult = async(req, res) => {
  try{
    const {AssesmentId, StudentId, marksObtained} = req.body;
    const result = await Result.create({AssesmentId, StudentId, marksObtained});
    res.send(result)
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const readResult = async(req, res) => {
  try{
    const result = await Result.findAll();
    res.send(result);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

const updateResult = async(req, res) => {
  const {id} = req.params;
  try{
    await Result.update(req.body,{ where:{id: id} });
    res.send('Result is successfully updated');
  }
  catch(err){
    res.status(401),send(err);
  }
}

const deleteResult = async(req, res) => {
  const {id} = req.params;
  try{
    await Result.destroy({where:{id: id}});
    res.send('Result is successfully deleted');
  }
  catch(err){
    res.status(401).send(err);
  }
}

const getSingleResult = async(req, res) => {
  const {id} = req.params;
  try{
    const result = await Result.findAll({where:{id: id}});
    res.send(result);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

module.exports = {
  createResult,
  readResult,
  updateResult,
  deleteResult,
  getSingleResult
};



