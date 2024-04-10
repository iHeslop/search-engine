import { useEffect, useState } from "react";
import { getBookInfo } from "../../services/modal-services";
import styles from "./BookModal.module.scss";
import loading from "../../assets/Loading_2.gif";
import close from "../../assets/close.png";
import parse from "html-react-parser";

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
  const image = bookData?.image;
  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loading_container}>
          <img src={loading} className={styles.loading}></img>
        </div>
      )}
      {!isLoading && error && <h4 className={styles.error}>{error.message}</h4>}
      {!isLoading && bookData && (
        <div className={styles.box}>
          <img
            className={styles.close}
            src={close}
            alt="close"
            onClick={closeModal}
          ></img>
          {image ? (
            <img className={styles.image} src={image} alt="bookImage"></img>
          ) : (
            <div className={styles.image_missing}>
              <p>Image Unavailable</p>
            </div>
          )}

          <div className={styles.box_info}>
            <h1 className={styles.title}>{bookData.title}</h1>
            {bookData.authors
              ? bookData.authors.map((author) => (
                  <span className={styles.author} key={author}>
                    {author}
                  </span>
                ))
              : ""}
            <p id="bookDesc" className={styles.info}>
              {bookData.description ? (
                parse(bookData.description)
              ) : (
                <p>No Description Available</p>
              )}
            </p>
            <p className={styles.publish}>Publisher: {bookData.publisher}</p>
            <p className={styles.publish}>
              Published Date: {bookData.publishedDate}
            </p>
            <a className={styles.link} href={bookData.link} target="__blank">
              Read More...
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookModal;
