import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.scss";

const BookList = ({ bookData }) => {
  return (
    <div className={styles.box}>
      {bookData &&
        bookData.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default BookList;
