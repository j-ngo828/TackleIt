import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import styles from './App.module.scss';

function App() {
  return (
    <Stack className={styles.todoItems} gap={3}>
      <div>First item <Button variant="primary">COMPLETE</Button></div>
    </Stack>
  );
}

export default App;
