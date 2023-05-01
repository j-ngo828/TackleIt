import { HttpException } from '@/exceptions/HttpException';
import logger from '@/utils/logger';
import { ErrorRequestHandler, RequestHandler } from 'express';
import morgan from 'morgan';

const developmentLogger = () => {
  /* eslint-disable @typescript-eslint/no-unsafe-argument */
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  morgan.token('body', (request, _response) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const body = request.body;
    if (!body) return 'null';
    return Object.keys(body).length > 0 ? JSON.stringify(body) : 'null';
  });

  /* eslint-enable @typescript-eslint/no-unsafe-argument */
  /* eslint-enable @typescript-eslint/no-unsafe-assignment */

  return morgan(':method :url :status :res[content-length] - :response-time ms :body');
};

const unknownEndpoint: RequestHandler = (_request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler: ErrorRequestHandler = (error: HttpException, _request, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  return next(error);
};

export { developmentLogger, unknownEndpoint, errorHandler };
