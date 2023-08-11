import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer, Hero, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
