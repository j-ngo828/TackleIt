import { ITodo } from '@/interfaces/todo';
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema<ITodo>({
  title: {
    type: String,
    required: true,
  },
  description: String,
  isCompleted: Boolean,
  priority: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium',
  },
});

todoSchema.set('toJSON', {
  transform: (_doc, ret) => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */
    const returnObject = {
      ...ret,
      id: ret._id.toString(),
    };
    delete returnObject._id;
    delete returnObject.__v;
    return returnObject;
    /* eslint-enable */
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
