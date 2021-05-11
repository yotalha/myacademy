modeule.exports = (sequelize, DataTypes) => {
  const Assesment = sequelize.define('Assesment', {
    description: {
      type: DataTypes.STRING
    },
    code: {
      type: DataTypes.STRING
    },
    TeacherId: {
      type: DataTypes.INTEGER
    },
    CourseId: {
      type: DataTypes.INTEGER
    }
  })

  return Assesment;
}