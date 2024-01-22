import { PropsWithChildren } from "react";

import { Navbar } from "@/components/navbar";

export default function MyLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="p-3 pt-20 w-full h-full">{children}</main>
    </div>
  );
}
