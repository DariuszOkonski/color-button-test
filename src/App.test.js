// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText("Learn React");
//   expect(linkElement).toBeInTheDocument();
// });

let myValue = 1;

function add(x, y) {
  return x + y;
}

test("First", () => {
  expect(add(4, 5)).toBe(9);
});

test.only("Second", () => {
  expect(myValue).toBe(1);
});

test("check add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(4, 5)).toBe(9);
});
