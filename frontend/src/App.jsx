import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/App.module.scss';
import Stack from 'react-bootstrap/Stack';

import TodoControl from './components/TodoControl';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <>
      <Stack className={styles.header}>
        <div>Tackle It</div>
      </Stack>
      <TodoControl />
      <TodoItem />
    </>
  );
}

export default App;
