module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    AssesmentId: {
      type: DataTypes.INTEGER
    },
    StudentId: {
      type: DataTypes.INTEGER
    },
    marksObtained: {
      type: DataTypes.INTEGER
    }
  })
}