import app from '@/app';
import { getAllTodos, initializesDb } from '@/tests/test_helper';
import mongoose from 'mongoose';
import supertest from 'supertest';

const api = supertest(app);

beforeEach(async () => {
  await initializesDb();
});

describe('when there are some todos saved in the db', () => {
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

describe('creating a new todo', () => {
  test('succeeds with status code 201 and correct body', async () => {
    const initialTodoCount = (await getAllTodos()).length;
    const payload = {
      title: 'Hello world',
      description: 'The most iconic phrase known to programmers',
      isCompleted: false,
    };

    const result = await api
      .post('/api/todos')
      .send(payload)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const allTodos = await getAllTodos();
    expect(allTodos).toHaveLength(initialTodoCount + 1);
    expect(result.body).toMatchObject(payload);
  });
});

afterAll(async () => mongoose.connection.close());
