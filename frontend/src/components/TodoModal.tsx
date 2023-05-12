import { MODAL_MODE } from '@/utils/constants';
import { TodoPayload } from '@/utils/interfaces';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const MODAL_TITLE = Object.freeze({
  [MODAL_MODE.CREATE]: 'Create Todo',
  [MODAL_MODE.EDIT]: 'Update Todo',
});

interface TodoModalProps {
  show: boolean;
  mode: (typeof MODAL_MODE)[keyof typeof MODAL_MODE];
  onHide: () => void;
  handleSubmit: (payload: TodoPayload) => void;
}

interface TodoFormData {
  titleInput: { value: string };
  descriptionInput: { value: string };
  priorityInput: { value: 'high' | 'medium' | 'low' };
}

function TodoModal({ show, mode, onHide, handleSubmit, ...rest }: TodoModalProps) {
  const [validated, setValidated] = useState<boolean>(false);
  const handleHideModal = () => {
    onHide();
    setValidated(false);
  };
  return (
    <Modal show={show} onHide={handleHideModal} {...rest} centered size="lg">
      <Form
        noValidate
        validated={validated}
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.currentTarget;
          if (!form.checkValidity()) {
            event.stopPropagation();
            setValidated(true);
          } else {
            const { titleInput, descriptionInput, priorityInput } =
              event.target as typeof event.target & TodoFormData;
            handleSubmit({
              title: titleInput.value,
              description: descriptionInput.value,
              priority: priorityInput.value,
            });
            handleHideModal();
          }
        }}
      >
        <Modal.Header>
          <Modal.Title>{MODAL_TITLE[mode]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="todo.titleInput">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="titleInput"
              type="text"
              placeholder="Review CS 240 Lecture on priority queue"
              required
            />
            <Form.Control.Feedback type="invalid">Please provide a title.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="todo.descriptionInput">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="descriptionInput"
              placeholder="Go over the lecture slides, tutorials, and assignments. Do LeetCode practice problems with priority queue."
            />
          </Form.Group>
          <Form.Group controlId="todo.priorityInput">
            <Form.Label>Priority</Form.Label>
            <Form.Check
              name="priorityInput"
              value="high"
              id="todo.priorityHighInput"
              type="radio"
              label="High"
            />
            <Form.Check
              name="priorityInput"
              value="medium"
              id="todo.priorityMediumInput"
              type="radio"
              label="Medium"
              defaultChecked
            />
            <Form.Check
              name="priorityInput"
              value="low"
              id="todo.priorityLowInput"
              type="radio"
              label="Low"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary" onClick={handleHideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default TodoModal;
