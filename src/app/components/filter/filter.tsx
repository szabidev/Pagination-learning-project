import { FC, useState } from "react";
import Image from "next/image";

interface FilterProps {
  handleTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Filter: FC<FilterProps> = ({ handleTagChange, value }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleOnClick = () => {
    setActive(!active);
  };

  return (
    <div className="filter__container">
      <div className="filter__btn" onClick={handleOnClick}>
        Filter
      </div>
      <div className={`filter__form--container ${active ? "active" : ""}`}>
        <form className="filter__form">
          <input
            type="text"
            className="filter__input"
            placeholder="Enter up to 3 tags..."
            aria-label="filter"
            value={value}
            onChange={(e) => handleTagChange(e)}
          />
          <div className="filter__search--btn">
            <button className="filter__search--btn__image">
              <Image
                src="/svg/magnifying_glass.svg"
                alt="magnifying glass"
                width={32}
                height={32}
                className="filter__btn--icon"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
