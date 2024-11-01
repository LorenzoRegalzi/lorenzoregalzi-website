import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module for styling

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Link href="/"><h1>Lorenzo Regalzi</h1></Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;