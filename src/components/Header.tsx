import Link from 'next/link';
import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>Blog App
      </Link>
    </header>
  );
};

export default Header;