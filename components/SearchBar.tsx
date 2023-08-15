import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { CustomSearchButton } from "@/collections";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchBarProps } from "@/types";

export const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handlerSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModel === " ") {
      return alert("Please fill in the search bar");
    } else {
      setModel(searchModel);
      setManufacturer(searchManufacturer);
    }
  };

  return (
    <form className="searchbar" onSubmit={handlerSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
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
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <CustomSearchButton styles="sm:hidden" />
      </div>
      <CustomSearchButton styles="max-sm:hidden" />
    </form>
  );
};
