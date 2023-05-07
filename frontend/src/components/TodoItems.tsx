import { ReactComponent as TrashIcon } from '@/assets/trash.svg';
import styles from '@/components/TodoItems.module.scss';
import { ITodoItem } from '@/utils/interfaces';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

interface Base {
  handleTodoIsCompleteChange: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}
interface TodoItemsProps extends Base {
  todoItems: ITodoItem[];
}

interface TodoItemProps extends Base {
  todoItem: ITodoItem;
}

function TodoItem({ todoItem, handleTodoIsCompleteChange, handleDeleteTodo }: TodoItemProps) {
  return (
    <Row
      className={`${todoItem.isCompleted ? styles.completedItem : ''} mb-2`}
      gap={2}
      direction="horizontal"
    >
      <Col className={styles.checkboxColumn}>
        <Form.Check
          checked={todoItem.isCompleted}
          onChange={() => handleTodoIsCompleteChange(todoItem.id)}
        />
      </Col>
      <Col>
        <p>{todoItem.title}</p>
      </Col>
      <Col>
        <Button
          onClick={() => {
            if (confirm('Are you sure you want to delete this todo?')) {
              handleDeleteTodo(todoItem.id);
            }
          }}
          variant="outline-danger"
        >
          <Stack direction="horizontal" gap={1}>
            <TrashIcon />
          </Stack>
        </Button>
      </Col>
    </Row>
  );
}

function TodoItems({ todoItems, handleTodoIsCompleteChange, handleDeleteTodo }: TodoItemsProps) {
  return (
    <Container className={styles.items}>
      {todoItems.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            handleTodoIsCompleteChange={handleTodoIsCompleteChange}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </Container>
  );
}

export default TodoItems;
