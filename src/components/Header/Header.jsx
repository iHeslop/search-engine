import styles from "./Header.module.scss";
import image from "../../assets/play-books.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h1>Google Books</h1>
      <h3>Search Engine</h3>
    </div>
  );
};

export default Header;
