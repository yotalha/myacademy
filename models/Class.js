module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    code: {
      type: DataTypes.STRING
    },
    block: {
      type: DataTypes.STRING
    }
  })

  return Class;
}