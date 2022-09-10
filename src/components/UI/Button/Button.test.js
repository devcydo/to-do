import { render, screen } from "@testing-library/react";
import Button from "./";

test("Renders the Button component", () => {
  render(<Button label="Edit" type="submit"/>);
  const button = screen.getByRole("button", { name: /edit/i, type: /submit/i});
  expect(button).toBeInTheDocument();
});