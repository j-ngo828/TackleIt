import styles from '@/components/CreateTodo.module.scss';
import CreateTodoModal from '@/components/CreateTodoModal';
import { TodoPayload } from '@/utils/interfaces';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

interface CreateTodoProps {
  handleSubmit: (payload: TodoPayload) => void;
}

function CreateTodo({ handleSubmit }: CreateTodoProps) {
  const [showCreateTodoModal, setShowCreateTodoModal] = useState<boolean>(false);
  return (
    <Stack direction="horizontal" className={styles.container}>
      <Button
        className={styles.button}
        variant="primary"
        onClick={() => setShowCreateTodoModal(true)}
      >
        Create Todo
      </Button>
      <CreateTodoModal
        handleSubmit={handleSubmit}
        show={showCreateTodoModal}
        onHide={() => setShowCreateTodoModal(false)}
      />
    </Stack>
  );
}

export default CreateTodo;
