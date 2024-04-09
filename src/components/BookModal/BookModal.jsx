import { useEffect, useState } from "react";
import { getBookInfo } from "../../services/modal-services";
import styles from "./BookModal.module.scss";
import loading from "../../assets/Loading_2.gif";
import close from "../../assets/close.png";

const BookModal = ({ currBook, setCurrBook }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    if (currBook !== null) {
      setIsLoading(true);
      setBookData(null);
      setError(null);
      getBookInfo(currBook)
        .then((results) => setBookData(results))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [currBook]);
  const closeModal = () => {
    setCurrBook(null);
  };
  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loading_container}>
          <img src={loading} className={styles.loading}></img>
        </div>
      )}
      {!isLoading && error && <h4 className={styles.error}>{error.message}</h4>}
      {!isLoading && bookData && (
        <div>
          <img
            className={styles.close}
            src={close}
            alt="close"
            onClick={closeModal}
          ></img>
          <img src={bookData.image} alt="bookImage"></img>
          <h1>{bookData.title}</h1>
          {bookData.authors
            ? bookData.authors.map((author) => (
                <span key={author}>{author}</span>
              ))
            : ""}
          <p>{bookData.description}</p>
          <p>{bookData.publisher}</p>
          <p>{bookData.publishedDate}</p>
          <a href={bookData.link} target="__blank">
            Store Link
          </a>
        </div>
      )}
    </div>
  );
};

export default BookModal;
