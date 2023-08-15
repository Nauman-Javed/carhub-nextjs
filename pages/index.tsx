import { Inter } from "next/font/google";
import { Catalogue, Footer, Hero, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Navbar />
      <Hero />
      <Catalogue />
      <Footer />
    </main>
  );
}
