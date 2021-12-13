import { useState } from "react";
import "./App.css";
import Book from "./components/Book/Book";
import Counter from "./components/Counter/Counter";

function App() {
  const [books, setBooks] = useState([
    {
      id: "1378rey918g13uyd",
      title: "My Book",
      author: "Joaquin",
      pages: 390,
      year: 2021,
      available: true,
    },
  ]);

  const toggleAvailability = (id) => {
    setBooks(
      books.map((book) => book.id == id && (book.available = !book.available))
    );
  };

  return (
    <div className="App">
      <Counter />
      {books.map((book) => (
        <Book book={book} toggleAvailability={() => toggleAvailability(book.id)} />
      ))}
    </div>
  );
}

export default App;
