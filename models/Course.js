const Class = require("./Class");

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    code: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    // ClassId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: Class,
    //     key: 'ClassId'
    //   }
    // },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  })

  // Course.belongsTo(Class)

  

  return Course;
}