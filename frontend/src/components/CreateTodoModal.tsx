import { TodoPayload } from '@/utils/interfaces';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface CreateTodoModalProps {
  show: boolean;
  onHide: () => void;
  handleSubmit: (payload: TodoPayload) => void;
}

interface TodoFormData {
  titleInput: { value: string };
  descriptionInput: { value: string };
  priorityInput: { value: 'high' | 'medium' | 'low' };
}

function CreateTodoModal({ show, onHide, handleSubmit, ...rest }: CreateTodoModalProps) {
  return (
    <Modal show={show} {...rest} centered size="lg">
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          const { titleInput, descriptionInput, priorityInput } =
            event.target as typeof event.target & TodoFormData;
          handleSubmit({
            title: titleInput.value,
            description: descriptionInput.value,
            priority: priorityInput.value,
          });
          onHide();
        }}
      >
        <Modal.Body>
          <Form.Group className="mb-3" controlId="todo.titleInput">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="titleInput"
              type="text"
              placeholder="Review CS 240 Lecture on priority queue"
            />
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
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CreateTodoModal;
