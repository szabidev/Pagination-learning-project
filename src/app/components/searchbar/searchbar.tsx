"use client";
// use client so that I can use hooks in the project
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function for searching in the input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Function to set the results from the searchbar
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(searchTerm.length !== 0) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="searchbar">
      <form
        className="searchbar__form"
        onSubmit={handleSubmit}
        data-testid={"form-id"}
      >
        <input
          type="text"
          placeholder="Search collections..."
          value={searchTerm}
          onChange={handleChange}
          className="searchbar__input"
          aria-label="searchbar"
        />
        <div className="searchbar__btn--container">
          {searchTerm.length !== 0 && <button className="searchbar__btn">
            <Image
              // path for svg file, without public to work in nextjs
              src="/svg/magnifying_glass.svg"
              alt="magnifying glass"
              width={32}
              height={32}
              className="searcbhar__btn--icon"
              onClick={handleSubmit}
            />
          </button>}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
