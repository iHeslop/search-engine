const BookCard = ({ book }) => {
  return (
    <div>
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      ></img>
      <h4>{book.volumeInfo.title}</h4>
      {book.volumeInfo.authors.map((author) => (
        <span>{author}</span>
      ))}
      <p>{book.volumeInfo.description}</p>
      <p>Read More</p>
    </div>
  );
};

export default BookCard;
