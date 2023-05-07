import styles from '@/components/TodoControl.module.scss';
import { TODO_TAB_FILTER } from '@/utils/constants';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

interface TodoControlProps {
  handleTodoFilterChange: (filter: string) => void;
}

function TodoControl({ handleTodoFilterChange }: TodoControlProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>(TODO_TAB_FILTER.SHOW_ALL.eventKey);
  return (
    <Nav activeKey={selectedFilter} fill variant="tabs" className={styles.navbar}>
      {Object.entries(TODO_TAB_FILTER).map(([filterKey, filterProps]) => {
        return (
          <Nav.Item key={filterKey}>
            <Nav.Link
              onClick={() => {
                setSelectedFilter(filterProps.eventKey);
                handleTodoFilterChange(filterProps.eventKey);
              }}
              eventKey={filterProps.eventKey}
            >
              {filterProps.label}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default TodoControl;
