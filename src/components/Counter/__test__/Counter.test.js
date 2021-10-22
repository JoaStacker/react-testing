import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

//---------- BEFORE EACH TEST -----------
beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})

//---------- AFTER EACH TEST ------------
afterEach(() => {
    cleanup() //not necessary to specify. Its default.
})

// -------------- MAIN TESTS ----------------
test("Header renders with correct text", () => {
    //get the element by "data-testid" property.
    const headerElement = getByTestId('header');

    //i expect {something} to be {something}
    expect(headerElement.textContent).toBe("My Counter");
})

test("Counter initially starts at 0", () => {
    
    const counter = getByTestId("counter");

    expect(counter.textContent).toBe("0");
})

test("input contains an initial value of 1", () => {

    const inputElement = getByTestId("input");

    expect(inputElement.value).toBe("1");
})

test("button renders with +", () => {
    const addBtn = getByTestId("addBtn");

    expect(addBtn.textContent).toBe("+");
})

test("button renders with -", () => {
    const subtractBtn = getByTestId("subtractBtn");

    expect(subtractBtn.textContent).toBe("-");
})

test("changing value of input works correclt", () => {
    const inputElement = getByTestId("input");

    expect(inputElement.value).toBe("1");

    fireEvent.change(inputElement, {
     target: {
         value: "5"
     }
    })

    expect(inputElement.value).toBe("5")
})

test("click on plus btn adds 1 to counter", () => {
    const btnElement = getByTestId("addBtn");
    const counterElement = getByTestId("counter");
    
    expect(counterElement.textContent).toBe("0");
    fireEvent.click(btnElement)
    expect(counterElement.textContent).toBe("1");
})

test("click on substract btn subtracts 1 from counter", () => {
    const subtractbtnElement = getByTestId("subtractBtn");
    const counterElement = getByTestId("counter");

    expect(counterElement.textContent).toBe("0");
    fireEvent.click(subtractbtnElement)
    expect(counterElement.textContent).toBe("-1");
})

test("changing input value when clicking on add btn works correctly", () => {
    const addBtn = getByTestId("addBtn");
    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input");

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtn)

    expect(counterElement.textContent).toBe("5")
})


test("changing input value when clicking on sustract btn works correctly", () => {
    const subtractbtnElement = getByTestId("subtractBtn");
    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input");

    fireEvent.change(inputElement, {
        target: {
            value: "4"
        }
    })

    fireEvent.click(subtractbtnElement)

    expect(counterElement.textContent).toBe("-4");
})