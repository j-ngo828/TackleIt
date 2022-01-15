import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders todo app title", () => {
  render(<App />);
  const linkElement = screen.getByText(/todo app/i);
  expect(linkElement).toBeInTheDocument();
});
