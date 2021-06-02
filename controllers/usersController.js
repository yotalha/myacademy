const {User} = require('../models');


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
    await User.update(req.body,{ where:{id: id} });
    res.send('user is successfully updated');
  }
  catch(err){
    res.status(401),send(err);
  }
}

const deleteUser = async(req, res) => {
  const {id} = req.params;
  try{
    await User.destroy({where:{id: id}});
    res.send('user is successfully deleted');
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