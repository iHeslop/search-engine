export const getBookInfo = async (bookId) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  const results = data.items;
  if (!results) {
    throw new Error("No books found for search term: " + searchTerm);
  }
  return results;
};
