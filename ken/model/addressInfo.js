const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
address: [{
    parma_address: {
        type:String,
        required:true
    },
    parma_buss: {
        type:String,
        required:true
    },
    parma_comm: {
        type:String,
        required:true
    }
}

]
});
module.exports = mongoose.model('adds', userSchema);