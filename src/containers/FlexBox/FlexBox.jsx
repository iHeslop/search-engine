import styles from "./FlexBox.module.scss";

const FlexBox = ({ children }) => {
  return <div className={styles.flex}>{children}</div>;
};

export default FlexBox;
