import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-x-3 bg-slate-200 fixed top-0 z-[49] w-full h-20">
      <Button variant="link" asChild data-testid="todo-link">
        <Link href="/todo">Todo</Link>
      </Button>
      <Button variant="link" asChild data-testid="home-link">
        <Link href="/">Home</Link>
      </Button>
    </nav>
  );
};
