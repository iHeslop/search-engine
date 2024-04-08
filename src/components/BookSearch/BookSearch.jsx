const BookSearch = ({ onSearch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = new FormData(form).get("search");
    onSearch(searchTerm);
    form.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search for book here..." name="search" />
      <button>Search</button>
    </form>
  );
};

export default BookSearch;
