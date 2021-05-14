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
    Class.hasOne(models.Course, {
      foreignKey: 'ClassId',
      onDelete: 'cascade'
    })
  }
  // Class.hasOne(Course)


  return Class;
}