import styles from "./BooksContainer.module.scss";

const BooksContainer = ({ children }) => {
  return <div className={styles.flex}>{children}</div>;
};

export default BooksContainer;
