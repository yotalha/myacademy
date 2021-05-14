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

db.sequelize.sync();

app.use(express.json())

app.use('/users', userRoutes);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
app.use('/assesments', assesmentRoutes);
app.use('/classes', classRoutes);
app.use('/results', resultRoutes);


app.listen(3000, () => {
  console.log('listening on port 3000!!!');
})

