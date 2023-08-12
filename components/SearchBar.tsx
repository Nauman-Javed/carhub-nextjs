import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handlerSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handlerSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};
