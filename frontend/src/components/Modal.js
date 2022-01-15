import React, { Component } from "react";
import {
  Button,
  Form,
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
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeTask = { ...this.state.activeTask, [name]: value };

    this.setState({ activeTask });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Task</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="task-title">Title</Label>
              <Input
                type="text"
                id="task-title"
                name="title"
                value={this.state.activeTask.title}
                onChange={this.handleChange}
                placeholder="Enter Task Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="task-description">Description</Label>
              <Input
                type="text"
                id="task-description"
                name="description"
                value={this.state.activeTask.description}
                onChange={this.handleChange}
                placeholder="Enter Task description"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
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
