import * as React from "react"
import Header from "./Header/header";
import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <main>{children}</main>
        {/* rest of your layout */}
      </div>
    </>
  );
};

export default Layout;