import Todo, { ITodo } from '@/models/todo';

const getDefaultTodoData = (): ITodo => ({
  title: 'Python is joy',
  description: 'The language is very readable and concise',
  isCompleted: false,
  priority: 'high',
});

const createTodo = async (payload = {}) => {
  const data: ITodo = {
    ...getDefaultTodoData(),
    ...payload,
  };
  const newTodo = new Todo(data);
  const savedTodo = await newTodo.save();
  return savedTodo;
};

const getAllTodos = async () => {
  const allTodos = await Todo.find({});
  return allTodos;
};

export { createTodo, getAllTodos };
