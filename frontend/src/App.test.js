import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders app title", () => {
    render(<App />);
    const appTitle = screen.getByText(/TackleIt/i);
    expect(appTitle).toBeInTheDocument();
  });
});
