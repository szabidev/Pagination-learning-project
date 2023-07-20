import { FC } from "react";
import ImageToDisplay from "../imagetodisplay";

import { ImagesToShow } from "./types";

interface DisplayProps {
  imagesToShow: ImagesToShow[];
}

const Display: FC<DisplayProps> = ({ imagesToShow }) => {
  return (
    <div className="display__container">
      {imagesToShow.map((image) => {
        return (
          <div className="display__image" key={image.id}>
            <ImageToDisplay image={image} />
          </div>
        );
      })}
    </div>
  );
};

export default Display;
