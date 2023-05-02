/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

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

/* eslint-enable @typescript-eslint/no-unsafe-argument */
/* eslint-enable @typescript-eslint/no-explicit-any */
