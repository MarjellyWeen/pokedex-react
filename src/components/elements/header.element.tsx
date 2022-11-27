import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";

interface IProps {
  title?: string;
  isListView?: boolean;
  isDetailsView?: boolean;
  isLigthTheme?: boolean;
}

export const Header: FC<IProps> = ({
  title,
  isListView,
  isDetailsView,
  isLigthTheme,
}) => {
  return (
    <div className={styles.header}>
      <h1 className={classes(styles.title, isLigthTheme && styles.isLight)}>
        {title ?? "Pokédex"}
      </h1>
      <div className={styles.iconContainer}>
        {isListView && (
          <>
            <FontAwesomeIcon
              icon={"fa-solid fa-filter" as IconProp}
              className={styles.icon}
            />
            <FontAwesomeIcon
              icon={"fa-solid fa-arrow-right-arrow-left" as IconProp}
              v-show="isListView"
              className={styles.icon}
              style={{ transform: "rotate(90deg)" }}
            />
          </>
        )}
        {isDetailsView && (
          <FontAwesomeIcon
            icon={"fa-regular fa-heart" as IconProp}
            className={styles.icon}
          />
        )}
      </div>
    </div>
  );
};

const styles = {
  header: style({
    display: "flex",
    height: 103,
    width: "100%",
    marginBottom: 14,
  }),
  title: style({
    /* ✏️ Title */
    height: 41,
    width: "inherit",
    alignSelf: "end",
  }),
  isLight: style({
    color: baseColors.white,
  }),
  iconContainer: style({
    display: "flex",
    height: "fit-content",
    gap: 5,
    top: 21,
  }),
  icon: style({
    width: 20,
    height: 20,
  }),
};
