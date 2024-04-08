import { getBooksBySearchTerm } from "../../services/book-services";
import { useEffect, useState } from "react";
import BookList from "../../components/BookList/BookList";

const BookLoader = ({ searchTerm }) => {
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (searchTerm !== null) {
      setIsLoading(true);
      setBookData(null);
      setError(null);
      getBooksBySearchTerm(searchTerm)
        .then((results) => setBookData(results))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [searchTerm]);
  return (
    <>
      {isLoading && <p>...Loading...</p>}
      {!isLoading && error && <p style={{ color: "red" }}>{error.message}</p>}
      {!isLoading && bookData && <BookList bookData={bookData} />}
    </>
  );
};

export default BookLoader;
