"use client";
// use client so that I can use hooks in the project
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // function for searching in the input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // function to get the results from the searchbar
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search collections..."
          value={searchTerm}
          onChange={handleChange}
          className="searchbar__input"
        />
        <div className="searchbar__btn--container">
          <button className="searchbar__btn">
            <Image
              // path for svg file, without public to work in nextjs
              src="/svg/magnifying_glass.svg"
              alt="magnifying glass"
              width={32}
              height={32}
              className="searcbhar__btn--icon"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
