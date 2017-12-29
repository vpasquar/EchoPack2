module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true 
    },
    // boxId: DataTypes.INTEGER,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1, 1000]
    },
    authorUserId:  DataTypes.STRING, // Needed? Redundant? 
    score:  DataTypes.INTEGER,
    sentimentScore: DataTypes.INTEGER,
    Date: DataTypes.DATE
  });

Post.associate = function(models) {
    // We're saying that a Post should belong to an Box
    // A Post can't be created without a Box due to the foreign key constraint
    Post.belongsTo(models.Box, {
      foreignKey: {
        allowNull: false
      }
    });
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Post.hasMany(models.Comment, {
        onDelete: "cascade"
    });

  };

// Post.associate = function(models) {
//     // We're saying that a Post should belong to an User
//     // A Post can't be created without an User due to the foreign key constraint
//     Post.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

// Post.associate = function(models) {
//       // Associating Posts with comments
//       // When an Post is deleted, also delete any associated comments
//       Post.hasMany(models.Comment, {
//         onDelete: "cascade"
//       });
//     };
  return Post;
};