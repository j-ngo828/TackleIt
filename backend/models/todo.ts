import mongoose from 'mongoose';

export interface ITodo {
  title: string;
  description: string;
  isCompleted: boolean;
  priority: 'high' | 'medium' | 'low';
}

const todoSchema = new mongoose.Schema<ITodo>({
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
