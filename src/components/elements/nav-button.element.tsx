import React, { FC, useCallback } from "react";
import { style } from "typestyle";
import { baseColors, gradientColors } from "../../styling/colors.constant";
import { useNavigate } from "react-router";

interface IProps {
  isFavorites?: boolean;
  count?: number;
}

export const NavButton: FC<IProps> = ({ isFavorites, count }) => {
  const navigate = useNavigate();
  const handleNavigation = useCallback(() => {
    if (isFavorites) {
      navigate("/favorites");
    } else {
      navigate("/team");
    }
  }, [isFavorites, navigate]);

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
        <div className={styles.count}>{count ? count : "0"} Pokémon</div>
      </div>
    </div>
  );
};

const styles = {
  button: style({
    width: "50%",
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
