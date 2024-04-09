import styles from "./HeaderContainer.module.scss";

const HeaderContainer = ({ children }) => {
  return <div className={styles.flex}>{children}</div>;
};

export default HeaderContainer;
