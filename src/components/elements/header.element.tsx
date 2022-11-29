import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";
import { Icon } from "./icon.element";

interface IProps {
  title?: string;
  onFilterClick?: () => void;
  onSortClick?: () => void;
  onFavoriteClick?: () => void;
  isLigthTheme?: boolean;
  isFavorite?: boolean;
  themeColor?: string;
  onBackClick?: () => void;
}

export const Header: FC<IProps> = ({
  title,
  onFilterClick,
  onSortClick,
  onFavoriteClick,
  isLigthTheme,
  isFavorite,
  themeColor,
  onBackClick,
}) => {
  return (
    <div
      className={styles.header}
      style={{ background: themeColor ? themeColor : baseColors.white }}
    >
      {onBackClick && (
        <div className={styles.backButtonContainer} onClick={onBackClick}>
          <Icon icon="chevron-left" className={styles.backButtonIcon} /> Back
        </div>
      )}
      <h1 className={classes(styles.title, isLigthTheme && styles.isLight)}>
        {title ?? "Pokédex"}
      </h1>
      <div className={styles.iconContainer}>
        {onFilterClick && (
          <Icon icon="filter" className={styles.icon} onClick={onFilterClick} />
        )}
        {onSortClick && (
          <Icon
            icon="arrow-right-arrow-left"
            className={styles.icon}
            onClick={onSortClick}
            style={{ transform: "rotate(90deg)" }}
          />
        )}
        {/* only added light theme to heart icon for now, because there's no reason
        to have a dark theme heart icon yet */}
        {onFavoriteClick && (
          <FontAwesomeIcon
            icon={isFavorite ? "heart" : "heart-broken"}
            className={classes(styles.icon, isLigthTheme && styles.isLight)}
            onClick={onFavoriteClick}
          />
        )}
      </div>
    </div>
  );
};

const styles = {
  header: style({
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    height: 133,
    top: 0,
    left: 0,
    maxWidth: 1280,
    width: "-webkit-fill-available",
    padding: "30px 30px 0 30px",
    marginBottom: 14,
    zIndex: 1,
  }),
  title: style({
    /* ✏️ Title */
    height: 41,
    width: "inherit",
    alignSelf: "end",
  }),
  backButtonContainer: style({
    position: "absolute",
    display: "flex",
    color: baseColors.white,
    fontSize: 17,
    height: 46,
    alignItems: "center",
    gap: 5,
  }),
  backButtonIcon: style({
    fontSize: 23,
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
