const Course = require('./Course');

module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    code: {
      type: DataTypes.STRING
    },
    block: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  })

  Class.associate = (models) => {
    Class.hasMany(models.Course, {
      onDelete: "cascade",
    })
  }
  // Class.hasOne(Course)


  return Class;
}