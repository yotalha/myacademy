const express = require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/user');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const courseRoutes = require('./routes/course');
const assesmentRoutes = require('./routes/assesment');
const classRoutes = require('./routes/class');
const resultRoutes = require('./routes/result');
const bcrypt = require('bcrypt');
const { User } = require('./models');
const cookieParser = require('cookie-parser');
const {createTokens, validateToken} = require('./auth/JWT');

db.sequelize.sync();



app.use(express.json())
app.use(cookieParser())

app.use('/users', userRoutes);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
app.use('/assesments', assesmentRoutes);
app.use('/classes', classRoutes);
app.use('/results', resultRoutes);

app.post('/register', (req, res) => {
  const {username, password} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({
      username: username,
      password: hash
    }).then(() => {
      res.json('USER REGISTERED')
    }).catch((err) => {
      res.status(400).json({ error: err})
    })
  })
})

app.post('/login', async(req, res) => {
  const {username, password} = req.body;

  const user = await User.findOne({ where: {username}});

  if(!user) res.status(400).json({ error: 'user doesnt exist' })

  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    if(!match){
      res.status(400).json({ error: "Incorrect Username or Password!"})
    }
    else{
      const accessToken = createTokens(user);

      res.cookie('access-token', accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true,
      });

      res.json("LOGGED IN")
    }
  })
})

app.get('/profile', validateToken, (req, res) => {
  res.json("profile");
})

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
  const {statusCode = 500} = err;
  if(!err.message) err.message = 'Oh no, GACHIHYPER'
  res.status(statusCode)
})


app.listen(3000, () => {
  console.log('listening on port 3000!!!');
})

