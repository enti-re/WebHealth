const mongoose = require('mongoose');
const gymDataTemplate = new mongoose.Schema({

    gymName:{
        type: String,
        required: true,
    },
    gymDescription:{
        type: String,
        required: true,
    },
    gymLocation:{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('GymTable',gymDataTemplate);
