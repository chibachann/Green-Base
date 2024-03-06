import * as React from 'react';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import * as styles from './header.module.css';

const menuItems = [
  { path: '/services', label: 'サービス' },
  { path: '/business-solution', label: '業種別ソリューション' },
  { path: '/cases', label: '事例' },
  { path: '/pricing', label: '料金' },
  { path: '/tips', label: 'TIPS' },
  { path: '/inquiry', label: 'お問い合わせ' },
  { path: '/news', label: 'ニュースリリース' },
  { path: '/downloads', label: '資料ダウンロード' },
  { path: '/apply', label: 'ご利用お申し込み' },
  { path: '/login', label: 'ログイン' },
];

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
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobileMenu"
        >
          <FaBars />
        </button>
      </div>
      <nav
        id="mobileMenu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={styles.menuItem}
            onClick={toggleMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;