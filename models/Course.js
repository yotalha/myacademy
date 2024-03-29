module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    code: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  })

  Course.associate = (models) => {
    Course.hasMany(models.Assesment, {
      foreignKey: 'CourseId',
      onDelete: 'cascade'
    })
  }

  Course.associate = (models) => {
    Course.belongsToMany(models.Teacher, {through: 'TeacherCourseRel', foreignKey: 'CourseId'})
  }

  Course.associate = (models) => {
    Course.belongsToMany(models.Student, {through: 'StudentCourseRel', foreignKey: 'CourseId'})
  }

  return Course;
}