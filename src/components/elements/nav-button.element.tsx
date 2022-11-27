import React, { FC, useCallback } from "react";
import { style } from "typestyle";
import { baseColors, gradientColors } from "../../styling/colors.constant";

interface IProps {
  isFavorites?: boolean;
}

export const NavButton: FC<IProps> = ({ isFavorites }) => {
  const handleNavigation = useCallback(() => {
    if (isFavorites) {
      window.location.href = "/favorites";
    } else {
      window.location.href = "/team";
    }
  }, [name]);

  return (
    <div
      className={styles.button}
      style={{
        background: isFavorites
          ? gradientColors.favorites
          : gradientColors.team,
      }}
      onClick={handleNavigation}
    >
      <div className={styles.details}>
        <h2 className={styles.title}>
          {isFavorites ? "Favorites" : "My team"}
        </h2>
        <div className={styles.count}>12 Pokemon</div>
      </div>
    </div>
  );
};

const styles = {
  button: style({
    width: 167,
    height: 100,
    borderRadius: 10,
  }),
  details: style({
    margin: "46px 0 0 15px",
  }),
  title: style({
    margin: 0,
  }),

  count: style({
    fontSize: 15,
    color: baseColors.textGrey,
  }),
};
