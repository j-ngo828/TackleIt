import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
  priority: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium',
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
