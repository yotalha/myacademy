module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  })

  return User;
}