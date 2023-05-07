import styles from '@/components/Header.module.scss';
import Stack from 'react-bootstrap/Stack';

function Header() {
  return (
    <Stack direction="horizontal" className={styles.header}>
      <h1>Tackle It</h1>
    </Stack>
  );
}

export default Header;
