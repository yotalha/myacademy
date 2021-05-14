module.exports = (sequelize, DataTypes) => {
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

  Assesment.associate = (models) => {
    Assesment.hasOne(models.Result, {
      foreignKey: 'AssesmentId',
      onDelete: 'cascade'
    })
  }

  return Assesment;
}