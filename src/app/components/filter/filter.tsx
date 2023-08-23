import { FC, useState } from "react";
interface FilterProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  allTags: string[];
  setCurrentPage: (page: number) => void;
}

const Filter: FC<FilterProps> = ({
  tags,
  setTags,
  allTags,
  setCurrentPage,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [isValidTag, setIsValidTag] = useState<boolean>(true);

  const handleOnClick = () => {
    setActive(!active);
    setTags([]);
  };

  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((tag, index) => index !== indexToRemove)]);
  };

  const addTags = (e: any) => {
    const targetValue = e.target.value.toLowerCase();
    if (targetValue !== "") {
      const isTagInAllTags = allTags.some((tag) => tag === targetValue);
      if (isTagInAllTags) {
        setTags([...tags, targetValue]);
        setIsValidTag(true);
      } else {
        setIsValidTag(false);
      }
      e.target.value = "";
      setCurrentPage(1);
    }
  };

  return (
    <div className="filter__container">
      <div className="filter__btn" onClick={handleOnClick}>
        Filter
      </div>
      <div className={`filter__form--container ${active ? "active" : ""}`}>
        <div className="filter__form">
          <ul id="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag__title">{tag}</span>
                <span
                  className="tag__close-icon"
                  onClick={() => removeTags(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="filter__input"
            placeholder="Enter up to 3 tags..."
            aria-label="filter"
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          />
        </div>
        {!isValidTag && (
          <p className="error-message">Invalid tag, please try again.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
