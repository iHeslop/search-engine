import styles from "./ModalContainer.module.scss";

const ModalContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ModalContainer;
