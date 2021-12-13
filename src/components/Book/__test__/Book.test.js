import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import Book from "../Book";
import bookStyles from "../Book.module.css";

describe("<Book />", () => {
  let component;

  const book = {
    title: "My Book",
    author: "Joaquin",
    pages: 390,
    year: 2021,
    available: true,
  };

  beforeEach(() => {
    component = render(<Book book={book} />);
  });

  test("renders content", () => {
    // --------- TESTEAR CONTENIDO ----------
    //OPCION 1: recupera el texto del componente y evalua si el contenido es el especificado.
    // component.getByText(book.title);
    // component.getByText(book.author);
    // component.getByText("make not available")
    //OPCION 2: expect the text content of the dom node to be the text specified.
    //component.container: reference to the DOM node where the component is mounted
    //tambien consiera el texto en los nodos hijos.
    // expect(component.container).toHaveTextContent(book.title)

    const $title = component.container.querySelector("h1");
    const $author = component.container.querySelector("h2");
    const $status = component.container.querySelector("span");
    const $button = component.container.querySelector("button");
    // console.log(prettyDOM($title));
    // console.log(prettyDOM($author));
    // console.log(prettyDOM($status));
    // console.log(prettyDOM($button));
    expect($title).toHaveTextContent(book.title);
    expect($author).toHaveTextContent(book.author);
    expect($status).toHaveTextContent(
      book.available ? "Available" : "Not available"
    );
    expect($button).toHaveTextContent(
      book.available ? "Make not available" : "Make available"
    );
  });
  test("Clicking the button calls event handler once", () => {
    //Funcion mock que verifica que se llame el evento.
    const mockHandler = jest.fn();
    component = render(<Book book={book} toggleAvailability={mockHandler} />);

    const $button = component.container.querySelector("button");

    // console.log(prettyDOM($button));
    fireEvent.click($button);
    //checks if the mockHandler is called only once (two different options shown bellow)
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("CSS modules applied correctly", () => {
    const $bookDiv = component.container.childNodes[0];
    const $title = component.container.querySelector("h1");
    const $author = component.container.querySelector("h2");
    const $status = component.container.querySelector("span");
    expect($bookDiv).toHaveClass(bookStyles.book);
    expect($title).toHaveClass(bookStyles.title);
    expect($author).toHaveClass(bookStyles.author);
    expect($status).toHaveClass(
      book.available ? bookStyles.enabled : bookStyles.disabled
    );
  });
});
