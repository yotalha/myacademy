const {Class} = require('../models');

const createClass = async(req, res) => {
  try{
    const {code, block} = req.body;
    const newClass = await Class.create({code, block});
    res.send(newClass)
  }
  catch(err){
    res.send('error', err);
  }
}

const readClass = async(req, res) => {
  try{
    const myClass = await Class.findAll();
    res.send(myClass);
  }
  catch(err){
    res.send('error', err);
  }
}

const updateClass = async(req, res) => {
  const {id} = req.params;
  try{
    await Class.update(req.body,{ where:{id: id} });
    res.send('Class is successfully updated');
  }
  catch(err){
    res.status(401),send(err);
  }
}

const deleteClass = async(req, res) => {
  const {id} = req.params;
  try{
    await Class.destroy({where:{id: id}});
    res.send('Class is successfully deleted');
  }
  catch(err){
    res.status(401).send(err);
  }
}

const getSingleClass = async(req, res) => {
  const {id} = req.params;
  try{
    const newClass = await Class.findAll({where:{id: id}});
    res.send(newClass);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

module.exports = {
  createClass,
  readClass,
  updateClass,
  deleteClass,
  getSingleClass
};



