const Todo = {
  count: (query = {}) => {
    console.log(query);
    return Promise.resolve(20);
  },
};

export default Todo;
