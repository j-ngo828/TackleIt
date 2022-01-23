import React, { Component } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTask: this.props.activeTask,
      validate: {
        titleState: "",
        descriptionState: "",
      },
    };
  }

  // validateInput(e) {
  //   let validate = { ...this.state.validate };
  //   if (e.target.ariaLabel === "title-input" && !e.target.value) {
  //     validate.titleState = "has-danger";
  //   }
  //   if (e.target.ariaLabel === "description-input" && !e.target.value) {
  //     validate.descriptionState = "has-danger";
  //   }
  //   this.setState({ validate });
  //   console.log(this.state.validate.titleState);
  // }

  handleValidation = () => {
    const fields = this.state.activeTask;
    console.log(fields);
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.handleValidation()) {
      alert("Fields must not be empty");
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeTask = { ...this.state.activeTask, [name]: value };
    this.setState({ activeTask });
  }

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Task</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="task-title">Title</Label>
              <Input
                aria-label="title-input"
                type="text"
                id="task-title"
                name="title"
                value={this.state.activeTask.title}
                invalid={this.state.validate.titleState === "has-danger"}
                onChange={this.handleChange}
                placeholder="Enter Task Title"
              />
              <FormFeedback>This field is required.</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="task-description">Description</Label>
              <Input
                aria-label="description-input"
                type="text"
                id="task-description"
                name="description"
                value={this.state.activeTask.description}
                invalid={this.state.validate.titleState === "has-danger"}
                onChange={this.handleChange}
                placeholder="Enter Task description"
              />
              <FormFeedback>This field is required.</FormFeedback>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  aria-label="completed-input"
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeTask.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeTask)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
