import { useState } from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ startIndex, setStartIndex }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const handleNextPage = () => {
    setStartIndex(startIndex + 5);
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (startIndex >= 5) {
      setStartIndex(startIndex - 5);
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handlePrevPage}>
        &#8666;
      </button>
      <p className={styles.number}>{pageNumber}</p>
      <button className={styles.button} onClick={handleNextPage}>
        &#8667;
      </button>
    </div>
  );
};
export default Pagination;
