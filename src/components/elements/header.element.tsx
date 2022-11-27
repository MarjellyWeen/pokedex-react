import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";
import { Icon } from "./icon.element";

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
            <Icon icon="filter" className={styles.icon} />
            <Icon
              icon="arrow-right-arrow-left"
              v-show="isListView"
              className={styles.icon}
              style={{ transform: "rotate(90deg)" }}
            />
          </>
        )}
        {isDetailsView && (
          <FontAwesomeIcon icon="heart" className={styles.icon} />
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
