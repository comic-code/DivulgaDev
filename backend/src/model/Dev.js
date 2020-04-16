const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    email: String,
    html_url: String,
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    state: String,
    city: String
});

module.exports = mongoose.model('Dev', DevSchema);