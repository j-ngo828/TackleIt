import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TodoItemInputForm from '@/components/TodoItemInputForm';
import Modal from 'react-bootstrap/Modal';

function TodoItemInputModal({ openModal }) {
  const [show, setShow] = useState(openModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
      >
        Add todo item
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a new todo item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoItemInputForm />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoItemInputModal;
