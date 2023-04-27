import Form from 'react-bootstrap/Form';
import React from 'react';
import styles from '@/components/TodoItemInputForm.module.scss';

function TodoItemInputForm() {
  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId="todoItemForm.ControlInputTitle"
      >
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Get groceries" />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlDescription"
      >
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          className={styles.descriptionInput}
        />
      </Form.Group>
    </Form>
  );
}

export default TodoItemInputForm;
