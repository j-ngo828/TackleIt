import styles from '@/components/TodoItems.module.scss';
import { ITodoItem } from '@/utils/interfaces';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

interface TodoItemsProps {
  todoItems: ITodoItem[];
  handleTodoIsCompleteChange: (id: string) => void;
}

interface TodoItemProps {
  todoItem: ITodoItem;
  handleTodoIsCompleteChange: (id: string) => void;
}

function TodoItem({ todoItem, handleTodoIsCompleteChange }: TodoItemProps) {
  return (
    <Row
      className={`${todoItem.isCompleted && styles.completedItem} ${styles.item}`}
      gap={2}
      direction="horizontal"
    >
      <Col xs={1}>
        <Form.Check
          checked={todoItem.isCompleted}
          onChange={() => handleTodoIsCompleteChange(todoItem.id)}
        />
      </Col>
      <Col>
        <p>{todoItem.title}</p>
      </Col>
    </Row>
  );
}

function TodoItems({ todoItems, handleTodoIsCompleteChange }: TodoItemsProps) {
  return (
    <Container className={styles.items}>
      {todoItems.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            handleTodoIsCompleteChange={handleTodoIsCompleteChange}
          />
        );
      })}
    </Container>
  );
}

export default TodoItems;
