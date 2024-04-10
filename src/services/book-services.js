export const getBooksBySearchTerm = async (searchTerm, startIndex) => {
  const maxResults = calculateMaxResults();
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`
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

const calculateMaxResults = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    return 4;
  } else if (screenWidth > 862 && screenWidth <= 1118) {
    return 4;
  } else if (screenWidth > 1118 && screenWidth <= 1374) {
    return 6;
  } else if (screenWidth > 1374 && screenWidth <= 1628) {
    return 8;
  } else if (screenWidth > 1628 && screenWidth <= 1800) {
    return 10;
  } else {
    return 12;
  }
};
