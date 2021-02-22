// collect all of the models

const User = require('./User');
const Post = require('./Post');


// define the relationship between User and Post
// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});


// reverse association
Post.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Post };