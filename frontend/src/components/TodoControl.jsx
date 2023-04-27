import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import styles from '@/components/TodoControl.module.scss';
import TodoItemInputModal from '@/components/TodoItemInputModal';

function TodoControl() {
  return (
    <Stack
      className={styles.controls}
      direction="horizontal"
      gap={2}
    >
      <TodoItemInputModal />
      <Button
        variant="success"
        size="sm"
        className="rounded-pill"
      >
        Completed
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="rounded-pill"
      >
        Incomplete
      </Button>
    </Stack>
  );
}

export default TodoControl;
