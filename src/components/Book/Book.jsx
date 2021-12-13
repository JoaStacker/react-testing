import bookStyles from "./Book.module.css";

const Book = ({ book, toggleAvailability }) => {
  const label = book.available ? "Make not available" : "Make available";
  const status = book.available ? "Available" : "Not available"

  return (
    <div className={bookStyles.book}>
      <h1 className={bookStyles.title}>{book.title}</h1>
      <h2 className={bookStyles.author}>{book.author}</h2>
      <span className={book.available ? bookStyles.enabled : bookStyles.disabled}>
        {status}
      </span>
      <button onClick={toggleAvailability}>{label}</button>
    </div>
  );
};

export default Book;
