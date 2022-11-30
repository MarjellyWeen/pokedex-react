import React, { FC, useState } from "react";
import { style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";
import { Icon } from "./icon.element";
import { ISprites } from "../../state/interfaces/sprites.interface";
import FsLightbox from "fslightbox-react";

interface IProps {
  sprites?: ISprites;
}

/** A component that displays a pokemon's images. It has a click handler that opens a lightbox. */
export const DetailImages: FC<IProps> = ({ sprites }) => {
  const [toggler, setToggler] = useState(false);
  // an arry with the images

  if (!sprites) return null;

  const images = [
    sprites.other["official-artwork"].front_default,
    sprites.front_default,
    sprites.back_default,
    sprites.front_shiny,
    sprites.back_shiny,
  ];

  return (
    <div className={styles.imageContainer}>
      <Icon className={styles.icon} icon="chevron-left" />
      <img
        className={styles.image}
        onClick={() => setToggler(!toggler)}
        src={sprites.other["official-artwork"].front_default}
      />

      <FsLightbox toggler={toggler} sources={images} />

      <Icon className={styles.icon} icon="chevron-right" />
    </div>
  );
};

const styles = {
  imageContainer: style({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  image: style({
    width: 225,
    height: 225,
    objectFit: "cover",
  }),
  icon: style({
    width: 20,
    height: 20,
    color: baseColors.white,
  }),
};
