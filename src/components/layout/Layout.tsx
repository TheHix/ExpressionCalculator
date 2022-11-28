import React, { FC, ReactNode } from "react";
import Header from "../shared/header/Header";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  ); 
};

export default Layout;
