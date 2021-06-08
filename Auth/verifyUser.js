const jwt = require('jsonwebtoken');
const {User} = require('../models');

module.exports = async function(req, res, next) {
  
  const token = req.header('auth-token');
  if(!token) return res.status(401).send('Access Denied');

  try{
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;
    console.log(verified.username)
    const checkUser = await User.findOne({where: {username: verified.username}})
    if(!checkUser) return res.send('user doenst exist in db')
    next();
  }
  catch(err){
    console.log(err)
    res.status(400).send(err);
  }
}

