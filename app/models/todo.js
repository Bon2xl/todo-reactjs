var mongoose = require('mongoose'),
  	Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  text: String,
  created_date: Date,
  is_completed: Boolean
});

ToDoSchema.virtual('date').get(function(){
  return this._id.getTimestamp();
});

mongoose.model('ToDo', ToDoSchema);

