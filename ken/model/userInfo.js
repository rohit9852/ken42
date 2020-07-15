const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mobile_number: { 
        type: Number, 
        required: true, 
        unique: true, 
    },
    dob: {
        type: Date,
        required: true
    },
    roll_number: {
        type: Number, 
        required: true, 
        unique: true, 
    },
    user_role: {
        type: Boolean,
        default: 0
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    address: [{
        parma_address: {
            type:String,
            required:true
        },
        parma_address: {
            type:String,
            required:true
        },
        parma_address: {
            type:String,
            required:true
        }
    }

    ]
});

module.exports = mongoose.model('User', userSchema);