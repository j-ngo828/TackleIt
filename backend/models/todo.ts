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

todoSchema.set('toJSON', {
  transform: (_doc, ret) => {
    /* eslint-disable */
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
