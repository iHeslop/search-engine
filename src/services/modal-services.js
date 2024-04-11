export const getBookInfo = async (bookId) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch book");
  }
  const data = await response.json();
  const results = data.volumeInfo;
  const image = results.imageLinks?.medium
    ? results.imageLinks?.medium
    : results.imageLinks?.thumbnail;
  return {
    title: results.title,
    authors: results.authors,
    description: results.description,
    image: image,
    publisher: results.publisher,
    publishedDate: results.publishedDate,
    link: results.canonicalVolumeLink,
  };
};
