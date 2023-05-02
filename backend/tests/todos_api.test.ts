import app from '@/app';
import Todo from '@/models/todo';
import mongoose from 'mongoose';
import supertest from 'supertest';

const api = supertest(app);

describe('todos api', () => {
  beforeEach(async () => {
    await Todo.deleteMany({});
  });

  it('returns all todo items', async () => {
    const result = await api
      .get('/api/todos')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const allTodos = await Todo.find({});
    expect(result.body.length).toBe(allTodos.length);
  });
});

afterAll(async () => mongoose.connection.close());
