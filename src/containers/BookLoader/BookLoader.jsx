import { getBooksBySearchTerm } from "../../services/book-services";
import { useEffect, useState } from "react";
import BookList from "../../components/BookList/BookList";
import styles from "./BookLoader.module.scss";
import loading from "../../assets/Loading_2.gif";

const BookLoader = ({ searchTerm, startIndex, setCurrBook }) => {
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (searchTerm !== null) {
      setIsLoading(true);
      setBookData(null);
      setError(null);
      getBooksBySearchTerm(searchTerm, startIndex)
        .then((results) => setBookData(results))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [searchTerm, startIndex]);
  return (
    <div className={styles.container}>
      {isLoading && <img src={loading} className={styles.loading}></img>}
      {!isLoading && error && <h4 className={styles.error}>{error.message}</h4>}
      {!isLoading && bookData && (
        <div className={styles.list}>
          <h4>Search results for {searchTerm}:</h4>
          <BookList bookData={bookData} setCurrBook={setCurrBook} />
        </div>
      )}
    </div>
  );
};

export default BookLoader;
