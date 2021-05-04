const mongoose = require('mongoose');
const articleDataTemplate = new mongoose.Schema({

    articleName:{
        type: String,
        required: true,
    },
    articleLink:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('ArticleTable',articleDataTemplate);