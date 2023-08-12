import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer, Hero, Navbar, SearchBar } from "@/components";
import { CustomFilter } from "@/collections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Navbar />
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter_container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
