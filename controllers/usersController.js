const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//register
const registerUser = async(req, res) => {
  const {fullName, username, email, password} = req.body;
  const checkUser = await User.findOne({where: {username: username}});
  if(checkUser){
    res.status(400).send('username already exists!');
  }
  else{
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({fullName: fullName, email: email, username: username, password: hashedPassword});
    try{
      res.send(user);
    }
    catch(err){
      res.status(400).send(err);
    }
  }
}

//login
const loginUser = async(req, res) => {

  const {username, password} = req.body;
  const user = await User.findOne({where: {username: username}});

  if(!user) return res.status(400).send('username or password is wrong');

  const validPass = await bcrypt.compare(password, user.password);
  
  if(!validPass) return res.status(400).send('username or password is wrong');

  //create and assign a token
  const token = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET);
  res.header('auth-token', token).send(token);
}

const jwtTest = (req, res) => {
  res.send(req.user);
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
    res.status(401).send(err);
  }
}



module.exports = {
  registerUser,
  loginUser,
  jwtTest,
  readUser,
  updateUser,
  deleteUser,
  getSingleUser
};