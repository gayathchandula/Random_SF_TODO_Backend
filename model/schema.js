var mongoose=require('mongoose');
 
var Schema = new mongoose.Schema({
    TaskId:Number,
    Title:String,
    Status:String
});
 
module.exports = mongoose.model(
    'task', Schema, 'random');