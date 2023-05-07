import CreateTodo from '@/components/CreateTodo';
import Header from '@/components/Header';
import TodoControl from '@/components/TodoControl';
import TodoItems from '@/components/TodoItems';
import todoService from '@/services/todoService';
import { TODO_TAB_FILTER } from '@/utils/constants';
import { ITodoItem, TodoPayload } from '@/utils/interfaces';
import { useEffect, useState } from 'react';

function App() {
  const [todoFilter, setTodoFilter] = useState<string>(TODO_TAB_FILTER.SHOW_ALL.eventKey);
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const fetchTodoItems = async () => {
      const response = await todoService.getAllTodos();
      setTodoItems(response.data);
    };
    fetchTodoItems();
  }, []);

  const handleTodoIsCompleteChange = async (id: string) => {
    const todoItem = todoItems.find((todoItem) => todoItem.id === id);
    if (!todoItem) return;
    const payload = {
      ...todoItem,
      isCompleted: !todoItem.isCompleted,
    };
    const response = await todoService.updateTodo(id, payload);
    setTodoItems(todoItems.map((todoItem) => (todoItem.id === id ? response.data : todoItem)));
  };

  const handleDeleteTodo = async (id: string) => {
    await todoService.deleteTodo(id);
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  const handleSubmitTodo = async (payload: TodoPayload) => {
    const response = await todoService.createTodo(payload);
    setTodoItems([...todoItems, response.data]);
  };

  return (
    <>
      <Header />
      <CreateTodo handleSubmit={handleSubmitTodo} />
      <TodoControl handleTodoFilterChange={(filter) => setTodoFilter(filter)} />
      <TodoItems
        todoItems={todoItems}
        todoFilter={todoFilter}
        handleTodoIsCompleteChange={handleTodoIsCompleteChange}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
