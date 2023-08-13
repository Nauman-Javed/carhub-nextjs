import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { CustomSearchButton } from "@/collections";
import Image from "next/image";
import { useRouter } from "next/router";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handlerSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === " ") {
      return alert("Please fill in the search bar");
    } else {
    }
    updateSearchparams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchparams = (model: string, manufacturer: string) => {
    const serachParams = new URLSearchParams(window.location.search);

    if (model) {
      serachParams.set("model", model);
    } else {
      serachParams.delete("model");
    }

    if (manufacturer) {
      serachParams.set("manufacturer", manufacturer);
    } else {
      serachParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${serachParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handlerSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <CustomSearchButton styles="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <CustomSearchButton styles="sm:hidden" />
      </div>
      <CustomSearchButton styles="max-sm:hidden" />
    </form>
  );
};
