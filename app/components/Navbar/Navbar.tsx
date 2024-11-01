import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module for styling

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Lorenzo Regalzi</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#section1">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;