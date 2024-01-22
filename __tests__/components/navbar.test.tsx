import { Navbar } from "@/components/navbar";
import { render, screen } from "@testing-library/react";

describe("testing navbar", () => {
  it("should render the navbar with two links", () => {
    render(<Navbar />);

    const todoLink = screen.getByTestId("todo-link");
    const homeLink = screen.getByTestId("home-link");

    expect(todoLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();

    expect(screen.getByRole("navigation")).toHaveClass(
      "flex items-center justify-center gap-x-3 bg-slate-200 fixed top-0 z-[49] w-full h-20"
    );
  });
});
