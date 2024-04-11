import styles from "./Header.module.scss";
import image from "../../assets/play-books.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h1 className={styles.header}>Google Books</h1>
      <h3 className={styles.text}>Search Engine</h3>
    </div>
  );
};

export default Header;
