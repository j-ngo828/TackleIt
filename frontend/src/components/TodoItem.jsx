import React from 'react'
import styles from '@/components/TodoItem.module.scss'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function TodoItem() {
  return (
    <Stack className={styles.todoItems} gap={3}>
      <div>Priorty 1, item description <Button variant="danger">Delete</Button></div>
    </Stack>
  )
}

export default TodoItem