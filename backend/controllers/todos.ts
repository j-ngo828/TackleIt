import { TodoPayload } from '@/interfaces/todo';
import Todo from '@/models/todo';
import { RequestHandler, Router } from 'express';

const todosRouter = Router();

todosRouter.get('/info', (async (_request, response) => {
  const todosCount = await Todo.count({});
  response.send(`<p>Tackle It currently have ${todosCount} todo items</p>`);
}) as RequestHandler);

todosRouter.get('/', (async (_request, response, next) => {
  try {
    const todos = await Todo.find({});
    response.json(todos);
  } catch (error) {
    next(error);
  }
}) as RequestHandler);

todosRouter.get('/:id', (async (request, response, next) => {
  try {
    const todos = await Todo.findById(request.params.id);
    response.json(todos);
  } catch (error) {
    next(error);
  }
}) as RequestHandler);

todosRouter.post('/', (async (request, response, next) => {
  try {
    const payload = {
      ...(request.body as TodoPayload),
    };

    const newTodo = new Todo(payload);
    const result = await newTodo.save();
    response.status(201).json(result);
  } catch (error) {
    next(error);
  }
}) as RequestHandler);

todosRouter.put('/:id', (async (request, response, next) => {
  try {
    const updatedNote = await Todo.findByIdAndUpdate(
      request.params.id,
      request.body as TodoPayload,
      {
        new: true,
      }
    );
    response.json(updatedNote);
  } catch (error) {
    next(error);
  }
}) as RequestHandler);

todosRouter.delete('/:id', (async (request, response, next) => {
  try {
    await Todo.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch (error) {
    next(error);
  }
}) as RequestHandler);

export default todosRouter;
