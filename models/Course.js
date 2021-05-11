module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    code: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    ClassId: {
      type: DataTypes.INTEGER
    }
  })

  return Course;
}