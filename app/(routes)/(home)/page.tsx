import { cn } from "@/lib/utils";
import { Rubik_Burned } from "next/font/google";

const font = Rubik_Burned({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <h1 className={cn("text-5xl font-bold", font.className)}>HOME</h1>
    </div>
  );
}
