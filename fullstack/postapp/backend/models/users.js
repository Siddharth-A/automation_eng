// 12 Create users database for login and registration
// 12.1 create assosciation between user and post
// 12.2 create new route to add users 

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username:{type:DataTypes.STRING, allowNull: false},
        password:{type:DataTypes.STRING, allowNull: false},
    });

    // // 12.1 associate comments to each post
    // Users.associate = (models) => {
    //     Users.hasMany(models.Posts, {
    //         onDelete: "cascade",
    //     });
    // }

    return Users;
}