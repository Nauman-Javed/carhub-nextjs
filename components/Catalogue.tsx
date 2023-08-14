import React, { useEffect, useState } from "react";
import { CarCard, SearchBar } from ".";
import { CustomFilter } from "@/collections";
import { fetchCars } from "@/utils";

export const Catalogue = ({ serachParams }) => {
  const [cars, setCars] = useState([]);
  const [isArrayEmpty, setIsArrayEmpty] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const allCars = await fetchCars({
          manufacturer: serachParams.manufacturer || "",
          year: serachParams.year || "2022",
          fuel: serachParams.fuel || "",
          limit: serachParams.limit || 10,
          model: serachParams.model || "",
        });
        setCars(allCars);
        console.log(cars);

        setIsArrayEmpty(!Array.isArray(allCars) || allCars.length < 1);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
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
      {!isArrayEmpty ? (
        <section className="home__cars-wrapper">
          {cars.map((car) => {
            return <CarCard key={car} car={car} />;
          })}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">No Results</h2>
        </div>
      )}
    </div>
  );
};
