module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    name: {
      type: DataTypes.STRING
    },
    education: {
      type: DataTypes.STRING
    },
    specialization: {
      type: DataTypes.STRING
    }
  })

  Teacher.associate = (models) => {
    Teacher.hasMany(models.Assesment, {
      foreignKey: 'TeacherId'
    })
  }

  return Teacher;
}