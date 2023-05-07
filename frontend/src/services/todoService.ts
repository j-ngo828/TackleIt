import { ITodoItem, TodoPayload } from '@/utils/interfaces';
import axios from 'axios';

const todoService = (() => {
  const todosApiRoute = '/api/todos';

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

  const deleteTodo = async (id: string) => await axios.delete(`${todosApiRoute}/${id}`);

  return {
    getAllTodos,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo,
  };
})();

export default todoService;
