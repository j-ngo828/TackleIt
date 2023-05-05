import { TodoPayload } from '@/interfaces/todo';
import Todo from '@/models/todo';

const getDefaultTodoData = () => ({
  title: 'Python is joy',
  description: 'The language is very readable and concise',
  isCompleted: false,
  priority: 'high',
});

const createTodo = async (payload: TodoPayload = {}) => {
  const data = {
    ...getDefaultTodoData(),
    ...payload,
  };
  const newTodo = new Todo(data);
  const savedTodo = await newTodo.save();
  return savedTodo;
};

const getAllTodos = async () => {
  const allTodos = await Todo.find({});
  return allTodos.map((todo) => todo.toJSON());
};

const initializesDb = async () => {
  await Todo.deleteMany({});
  await createTodo();
  await createTodo({ title: 'Ruby is so concise and beautiful' });
};

export { createTodo, getAllTodos, initializesDb };
