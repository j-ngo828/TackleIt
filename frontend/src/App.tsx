import { useState } from 'react';
import styles from '@/App.module.scss';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      {count}{' '}
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
