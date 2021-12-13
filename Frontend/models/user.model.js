const user = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        User_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: 0
      },
      User_Name: {
        type: Sequelize.STRING,
        allowNull: 0
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: 0
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: 0
      },
      Gender : {
        type: Sequelize.INTEGER,
        allowNull: 1
      },
      Birthdate : {
        type: Sequelize.DATE,
        allowNull: 1
      },
      Location : {
        type: Sequelize.INTEGER,
        allowNull: 1
      },
      SubscriptionType : {
        type: Sequelize.INTEGER,
        allowNull: 1
      },
      Active_Status : {
        type: Sequelize.INTEGER,
        allowNull: 1
      },
      Last_Login : {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      CreatedOn : {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  
    return User;
  };

export default user;