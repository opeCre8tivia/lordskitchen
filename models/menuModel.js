const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String,
        required:[true]
    },
    price:{
        type:Number,
        required:[true]
    }
});

const MenuModel = mongoose.model('Menu', ItemSchema);

module.exports =  MenuModel;