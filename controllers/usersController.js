const User = require('../models/User');


const createUser = async(req, res) => {
  const {firstName, lastName} = req.body;
  try{
    const user = await User.create({firstName, lastName});
    res.send(user);
  }
  catch(err){
    res.status(401).send(err);
  }
}

const readUser = async(req, res) => {
  try{
    const user = await User.findAll();
    res.send(user);
  }
  catch(err){
    res.status(401).send(err);
  }
}

const updateUser = async(req, res) => {
  const {id} = req.params;
  try{
    const user = await User.update(req.body,{ where:{id: id} });
    res.send(`user with id ${user} has been updated`)
  }
  catch(err){
    res.status(401),send(err);
  }
}

const deleteUser = async(req, res) => {
  const {id} = req.params;
  try{
    const user = await User.destroy({where:{id: id}});
    res.send(`user with id ${user} has been deleted`);
  }
  catch(err){
    res.status(401).send(err);
  }
}

const getSingleUser = async(req, res) => {
  const {id} = req.params;
  try{
    const user = await User.findAll({where:{id: id}});
    res.send(user);
  }
  catch(err){
    res.status(401).send('error', err);
  }
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  getSingleUser
};