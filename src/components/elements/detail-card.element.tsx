import React, { FC } from "react";
import { style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";

interface IProps {
  name: string;
  children?: React.ReactNode;
}

/**
 * A component that displays a card with a title and content.
 */
export const DetailCard: FC<IProps> = ({ name, children }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.name}>{name}</div>
      <div className={styles.card}>{children}</div>
    </div>
  );
};

const styles = {
  name: style({
    fontSize: 12,
    letterSpacing: 0.374,
    color: baseColors.white,
    marginBottom: 10,
  }),
  cardContainer: style({}),
  card: style({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 25,
    background: baseColors.white,
    boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.04)",
    borderRadius: 10,
  }),
  description: style({
    lineHeight: 18,
    letterSpacing: -0.408,
    marginBottom: 20,
  }),
};
