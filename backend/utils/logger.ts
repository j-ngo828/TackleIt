/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any */

const info = (...params: any[]) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.log(...params);
};

const error = (...params: any[]) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.error(...params);
};

export default {
  info,
  error,
};

/* eslint-enable */
