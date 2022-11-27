import React, { FC } from "react";
import { style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";
import { Icon } from "./icon.element";
import { ISprites } from "../../state/interfaces/sprites.interface";

interface IProps {
  sprites?: ISprites;
}

export const DetailImages: FC<IProps> = ({ sprites }) => {
  return (
    <div className={styles.imageContainer}>
      <Icon className={styles.icon} icon="chevron-right" />
      <img className={styles.image} src={sprites?.front_default} />
      <div className={styles.shadow} />
      <Icon className={styles.icon} icon="chevron-right" />
    </div>
  );
};

const styles = {
  imageContainer: style({
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  image: style({
    width: 225,
    height: 225,
    objectFit: "cover",
  }),
  shadow: style({
    position: "absolute",
    width: 213,
    height: 12,
    left: "20%",
    bottom: "20%",
    background: "rgba(0, 0, 0, 0.3)",
    filter: "blur(7.5px)",
  }),
  icon: style({
    width: 20,
    height: 20,
    color: baseColors.white,
  }),
};
