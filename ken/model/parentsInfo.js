const mongoose = require('mongoose');

const parentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mother_name: {
        type:String,
        required:true,
        unique: true,
    },
    father_name :{ 
        type:String,
        unique: true,
    },
    Parent_email: {
        type:String,
        required:true

    }
});

module.exports = mongoose.model('ParentsInfo', parentSchema);