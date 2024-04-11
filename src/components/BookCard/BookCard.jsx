import styles from "./BookCard.module.scss";
import parse from "html-react-parser";

const BookCard = ({ book, setCurrBook }) => {
  const bookId = book.id;
  const openModal = () => {
    setCurrBook(bookId);
  };
  const handleClick = () => {
    if (window.innerWidth <= 768) {
      openModal();
    }
  };
  const description =
    book.volumeInfo.description?.length > 300
      ? `${book.volumeInfo.description?.slice(0, 300)}...`
      : book.volumeInfo?.description;
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
  const title =
    book.volumeInfo.title.length > 60
      ? book.volumeInfo.title.substring(0, 60) + "..."
      : book.volumeInfo.title;
  const authors = book.volumeInfo.authors;
  return (
    <div className={styles.card} onClick={handleClick}>
      {thumbnail ? (
        <img src={thumbnail} alt={title} className={styles.image}></img>
      ) : (
        <div className={styles.image_missing_div}>
          <p className={styles.image_missing}>No Image Available</p>
        </div>
      )}
      <div className={styles.desc}>
        <h4 className={styles.title}>{title}</h4>
        {authors
          ? authors.slice(0, 2).map((author) => (
              <span key={author} className={styles.author}>
                {author}
              </span>
            ))
          : ""}
        <p className={styles.info}>
          {description ? parse(description) : "No description available"}
        </p>
        <div className={styles.readMore_container}>
          <p onClick={openModal} className={styles.readMore}>
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
