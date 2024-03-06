import * as React from 'react';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import * as styles from './header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          BGNNX WGRK
        </Link>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
      {isMenuOpen && (
        <nav className={styles.mobileMenu}>
          {/* Add your mobile menu items here */}
        </nav>
      )}
    </header>
  );
};

export default Header;