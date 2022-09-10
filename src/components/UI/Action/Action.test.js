import { render, screen } from "@testing-library/react";
import Action from "./";

test("Renders the Action component", () => {
  render(<Action label="Edit" />);
  const action = screen.getByRole("button", { name: /edit/i});
  expect(action).toBeInTheDocument();
});
