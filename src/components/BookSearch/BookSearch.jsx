import styles from "./BookSearch.module.scss";

const BookSearch = ({ onSearch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = new FormData(form).get("search");
    onSearch(searchTerm);
    form.reset();
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Search for book here..."
        name="search"
        className={styles.search}
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default BookSearch;
