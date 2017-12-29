var bcrypt = require("bcrypt-nodejs");


module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        score: DataTypes.INTEGER
    });

    User.associate = function(models) {
        // Associating User with Boxes
        // When an User is deleted, also delete any associated Boxes
        User.hasMany(models.Box, {
            onDelete: "cascade"
        });
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    // User.associate = function(models) {
    //   // Associating User with Posts
    //   // When an User is deleted, also delete any associated Posts
    //   User.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // }; 

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    
    return User;
};