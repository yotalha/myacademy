module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    dob: {
      type: DataTypes.DATE
    },
    address: {
      type: DataTypes.STRING
    }
  })

  Student.associate = (models) => {
    Student.hasOne(models.Result, {
      foreignKey: 'StudentId'
    })
  }

  return Student;
}