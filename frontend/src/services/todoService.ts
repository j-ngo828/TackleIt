import { ITodoItem } from '@/utils/interfaces';
import axios from 'axios';

const todoService = (() => {
  const todosApiRoute = '/api/todos';
  interface TodoPayload {
    title?: string;
    description?: string;
    isCompleted?: boolean;
    priority?: 'high' | 'medium' | 'low';
  }

  const getAllTodos = async () => {
    const allTodos = await axios.get<ITodoItem[]>(todosApiRoute);
    return allTodos;
  };

  const getOneTodo = async (id: string) => {
    const oneTodo = await axios.get<ITodoItem>(`${todosApiRoute}/${id}`);
    return oneTodo;
  };

  const createTodo = async (payload: TodoPayload) => {
    const createdTodo = await axios.post<ITodoItem>(todosApiRoute, payload);
    return createdTodo;
  };

  const updateTodo = async (id: string, payload: TodoPayload) => {
    const updatedTodo = await axios.put<ITodoItem>(`${todosApiRoute}/${id}`, payload);
    return updatedTodo;
  };

  return {
    getAllTodos,
    getOneTodo,
    createTodo,
    updateTodo,
  };
})();

export default todoService;
