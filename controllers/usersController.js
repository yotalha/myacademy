const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//register
const registerUser = async(req, res) => {
  const {username, password} = req.body;
  const checkUser = await User.findOne({username: username});
  if(checkUser){
    res.status(400).send('username already exists!');
  }
  else{
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({username: username, password: hashedPassword});
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
  const checkUser = await User.findOne({where:{username: username}});

  const user = { username: username}


  if(!checkUser) return res.status(400).send('email or password is wrong');

  const validPass = await bcrypt.compare(password, checkUser.password);
  
  if(!validPass) return res.status(400).send('email or password is wrong');

  //create and assign a token
  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  res.json({ accessToken: accessToken, refreshToken: refreshToken})
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s'})
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
    res.status(401).send('error', err);
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