import Image from "next/image";
import { FC } from "react";

import { ImageToDisplayProps } from "./types";

const ImageToDisplay: FC<ImageToDisplayProps> = ({ image }) => {
  if (!image || !image.urls || !image.urls.regular) {
    return null;
  }

  return (
    <div className="image__container">
      <div className="image__wrapper">
        <Image
          src={image.urls.regular}
          alt={image.alt_description}
          className="image-to-display"
          style={{ objectFit: "cover" }}
          height={300}
          width={300}
          sizes="width:300px"
          priority={true}
        />
      </div>
      <div className="image__info">
        <p className="image__info--tags">{`#${image.tags[0].title}`}</p>
        <p className="image__info--tags">{`#${image.tags[1].title}`}</p>
        <p className="image__info--tags">{`#${image.tags[2].title}`}</p>
      </div>
      <div className="image__likes">
        <Image
          src="/svg/heart__icon.svg"
          alt="heart icon"
          width={32}
          height={32}
        />
        <p className="image__likes--number">{image.likes}</p>
      </div>
    </div>
  );
};

export default ImageToDisplay;
