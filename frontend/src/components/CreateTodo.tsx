import styles from '@/components/CreateTodo.module.scss';
import TodoModal from '@/components/TodoModal';
import { MODAL_MODE } from '@/utils/constants';
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
      <TodoModal
        handleSubmit={handleSubmit}
        show={showCreateTodoModal}
        mode={MODAL_MODE.CREATE}
        onHide={() => setShowCreateTodoModal(false)}
      />
    </Stack>
  );
}

export default CreateTodo;
