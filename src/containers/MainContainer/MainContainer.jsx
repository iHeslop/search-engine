import styles from "./MainContainer.module.scss";

const MainContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainContainer;
