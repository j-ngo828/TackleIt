import Todo from '@/models/todo';
import { RequestHandler, Router } from 'express';

const todosRouter = Router();

todosRouter.get('/', (async (_request, response) => {
  const todosCount = await Todo.count({});
  response.send(`<p>Tackle It currently have ${todosCount} todo items</p>`);
}) as RequestHandler);

export default todosRouter;
