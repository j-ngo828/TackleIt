import styles from '@/components/CreateTodo.module.scss';
import CreateTodoModal from '@/components/CreateTodoModal';
import { TodoPayload } from '@/utils/interfaces';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

interface CreateTodoProps {
  show: boolean;
  handleShowModal: () => void;
  handleHideModal: () => void;
  handleSubmit: (payload: TodoPayload) => void;
}

function CreateTodo({ show, handleShowModal, handleHideModal, handleSubmit }: CreateTodoProps) {
  return (
    <Stack direction="horizontal" className={styles.container}>
      <Button className={styles.button} variant="primary" onClick={handleShowModal}>
        Create Todo
      </Button>
      <CreateTodoModal handleSubmit={handleSubmit} show={show} onHide={handleHideModal} />
    </Stack>
  );
}

export default CreateTodo;
