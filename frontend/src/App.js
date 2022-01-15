import axios from "axios";
import React, { Component } from "react";
import Modal from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: [],
      modal: false,
      activeTask: {
        title: "",
        description: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/tasks/")
      .then((res) => this.setState({ taskList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (task) => {
    this.toggle();

    if (task.id) {
      axios
        .put(`/api/tasks/${task.id}/`, task)
        .then((res) => this.refreshList());
    } else {
      axios.post("/api/tasks/", task).then((res) => this.refreshList());
    }
  };

  handleDelete = (task) => {
    axios.delete(`/api/tasks/${task.id}`).then((res) => this.refreshList());
  };

  createTask = () => {
    const task = { title: "", description: "", completed: false };

    this.setState({ activeTask: task, modal: !this.state.modal });
  };

  editTask = (task) => {
    this.setState({ activeTask: task, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    return this.setState({ viewCompleted: status });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderTasks = () => {
    const { viewCompleted } = this.state;
    const newTasks = this.state.taskList.filter(
      (task) => task.completed === viewCompleted
    );

    return newTasks.map((task) => (
      <li
        key={task.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`task-title mr-2 ${
            this.state.viewCompleted ? "completed-task" : ""
          }`}
          title={task.description}
        >
          {task.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editTask(task)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(task)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-black text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button className="btn btn-primary" onClick={this.createTask}>
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderTasks()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeTask={this.state.activeTask}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
