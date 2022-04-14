import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";

function BookList() {
  return (
    <>
      <h2 className="heading">Popular Books</h2>
      <section className="bookList">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
}

const Book = (props) => {
  const { thumbnailUrl, title, authors, shortDescription } = props;
  const clickHandler = () => {
    window.open(thumbnailUrl, "_blank");
  };
  return (
    <article className="book">
      <img
        src={thumbnailUrl}
        alt={title}
        className="img"
        onClick={clickHandler}
      />
      <h1>{title}</h1>
      <h4>{authors.join(", ")}</h4>
      <p>{shortDescription}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
