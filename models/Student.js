module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.String
    },
    dob: {
      type: DataTypes.DATE
    },
    address: {
      type: DataTypes.STRING
    }
  })

  return Student;
}