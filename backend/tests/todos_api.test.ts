import app from '@/app';
import Todo from '@/models/todo';
import { createTodo, getAllTodos } from '@/tests/test_helper';
import mongoose from 'mongoose';
import supertest from 'supertest';

const api = supertest(app);

describe('when there are some todos saved in the db', () => {
  beforeEach(async () => {
    await Todo.deleteMany({});
    await createTodo();
    await createTodo({ title: 'Test number 2' });
  });

  test('all todos are returned', async () => {
    const result = await api
      .get('/api/todos')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const allTodos = await getAllTodos();
    expect(result.body.length).toBe(allTodos.length);
  });
});

describe('viewing a specific todo', () => {
  beforeEach(async () => {
    await Todo.deleteMany({});
    await createTodo({
      title: 'Functional programming is beautiful',
      description:
        'No side effect, only constants and recursion, no objects/classes, only functions',
      isCompleted: true,
    });
  });

  test('succeeds with a valid id', async () => {
    const initialTodos = await getAllTodos();
    const todoToView = initialTodos[0];

    const result = await api
      .get(`/api/todos/${todoToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(result.body).toEqual(todoToView);
  });
});

afterAll(async () => mongoose.connection.close());
