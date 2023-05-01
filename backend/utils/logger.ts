/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

const info = (...params: any[]) => {
  console.log(...params);
};

const error = (...params: any[]) => {
  console.error(...params);
};

export default {
  info,
  error,
};

/* eslint-enable @typescript-eslint/no-unsafe-argument */
/* eslint-enable @typescript-eslint/no-explicit-any */
