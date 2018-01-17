module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    // postId: DataTypes.INTEGER,
    replyToId: DataTypes.STRING,
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    authorUserId:  DataTypes.STRING,
    userName: {
      type: DataTypes.STRING,
      allowNull:false,
      len: [1,30]
    },
    score:  DataTypes.INTEGER,
    sentimentScore: DataTypes.FLOAT,
    Date: DataTypes.DATE
  });

  Comment.associate = function(models) {
    // We're saying that a Comment should belong to an Post
    // A Comment can't be created without a Psot due to the foreign key constraint
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Comment;
};