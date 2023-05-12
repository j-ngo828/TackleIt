import { ReactComponent as TrashIcon } from '@/assets/trash.svg';
import styles from '@/components/TodoItems.module.scss';
import TodoModal from '@/components/TodoModal';
import { MODAL_MODE, TODO_TAB_FILTER } from '@/utils/constants';
import { ITodoItem, TodoPayload } from '@/utils/interfaces';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

interface Base {
  handleTodoIsCompleteChange: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleUpdateTodo: (payload: TodoPayload) => void;
}
interface TodoItemsProps extends Base {
  todoItems: ITodoItem[];
  todoFilter: string;
}

interface TodoItemProps extends Base {
  todoItem: ITodoItem;
}

function TodoItem({
  todoItem,
  handleTodoIsCompleteChange,
  handleDeleteTodo,
  handleUpdateTodo,
}: TodoItemProps) {
  const [showTodoModal, setShowTodoModal] = useState<boolean>(false);
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
        <Button variant="primary" onClick={() => setShowTodoModal(true)}>
          View details
        </Button>
        <TodoModal
          handleSubmit={handleUpdateTodo}
          show={showTodoModal}
          mode={MODAL_MODE.EDIT}
          onHide={() => setShowTodoModal(false)}
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

function TodoItems({
  todoItems,
  handleTodoIsCompleteChange,
  handleDeleteTodo,
  todoFilter,
  handleUpdateTodo,
}: TodoItemsProps) {
  return (
    <Container className={styles.items}>
      {todoItems
        .filter((todoItem) => {
          switch (todoFilter) {
            case TODO_TAB_FILTER.SHOW_COMPLETED.eventKey:
              return todoItem.isCompleted;
            case TODO_TAB_FILTER.SHOW_INCOMPLETE.eventKey:
              return !todoItem.isCompleted;
            default:
              return true;
          }
        })
        .map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              handleTodoIsCompleteChange={handleTodoIsCompleteChange}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          );
        })}
    </Container>
  );
}

export default TodoItems;
