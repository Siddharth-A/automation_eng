// 3.1 define the table within this file along with the columns you want it to have (function postsinit)

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title:{type:DataTypes.STRING, allowNull: false},
        posttext:{type:DataTypes.STRING, allowNull: false},
        username:{type:DataTypes.STRING, allowNull: false}

    });

    // 10.2 associate comments to each post
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    }

    return Posts;
}