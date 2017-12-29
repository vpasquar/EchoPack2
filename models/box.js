module.exports = function(sequelize, DataTypes) {
  var Box = sequelize.define("Box", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    authorUserId: DataTypes.INTEGER,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 500]
    },
    sentimentScore: DataTypes.INTEGER,
    Date: DataTypes.DATE
  }
  // {
  //  freezeTableName: true // needed?
  // },
  );



  Box.associate = function(models) {
    // We're saying that a Box should belong to an User
    // A Box can't be created without an user due to the foreign key constraint
    Box.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
   // Associating Box with Posts
    // When an Box is deleted, also delete any associated Posts
    Box.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

   // Box.associate = function(models) {
   //    // Associating Box with Posts
   //    // When an Box is deleted, also delete any associated Posts
   //    Box.hasMany(models.Post, {
   //      onDelete: "cascade"
   //    });
   //  };

  return Box;
};