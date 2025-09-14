import { Github, Linkedin } from "lucide-react";
import { Kalam } from "next/font/google";

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Topbar() {
  return (
    <div className={`${kalam.className} px-4 pt-2 border-b-2 border-black`}>
      <h1 className="text-xl font-bold mb-2">SPACE SHEEP</h1>
      <nav className="flex gap-4">
        <a href="https://github.com/HeitorHellou" className="hover:underline"><Github /></a>
        <span className="text-lg">|</span>
        <a href="https://www.linkedin.com/in/heitor-hellou/" className="hover:underline"><Linkedin /></a>
      </nav>
    </div>
  );
}