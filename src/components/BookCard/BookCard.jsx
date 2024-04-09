import styles from "./BookCard.module.scss";

const BookCard = ({ book, setCurrBook }) => {
  const bookId = book.id;
  const openModal = () => {
    console.log(`Opened modal for: ${bookId}`);
    setCurrBook(bookId);
  };

  const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
  const title =
    book.volumeInfo.title.length > 60
      ? book.volumeInfo.title.substring(0, 60) + "..."
      : book.volumeInfo.title;
  const authors = book.volumeInfo.authors;
  return (
    <div className={styles.card}>
      {thumbnail ? (
        <img src={thumbnail} alt={title} className={styles.image}></img>
      ) : (
        <p className={styles.image_missing}>No Image Available</p>
      )}
      <div className={styles.desc}>
        <h4 className={styles.title}>{title}</h4>
        {authors
          ? authors.map((author) => (
              <span key={author} className={styles.author}>
                {author}
              </span>
            ))
          : ""}
      </div>
      <p onClick={openModal} className={styles.readMore}>
        ...
      </p>
    </div>
  );
};

export default BookCard;
