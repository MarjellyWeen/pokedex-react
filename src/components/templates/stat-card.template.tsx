import React, { FC } from "react";
import { style } from "typestyle";
import { IModel } from "../../state/interfaces/model.interface";
import { baseColors } from "../../styling/colors.constant";
import { DetailCard } from "../elements/detail-card.element";

interface IProps {
  stats: {
    base_stat: number;
    effort: number;
    stat: IModel;
  }[];
}

export const StatCard: FC<IProps> = ({ stats }) => {
  return (
    <DetailCard name="Stats">
      {stats.map((stat) => (
        <div key={stat.stat.name} className={styles.item}>
          <div className={styles.itemName}>{stat.stat.name}</div>
          <div className={styles.itemValue}>{stat.base_stat}</div>
          <div className={styles.statBar}>
            <div
              className={styles.statBarFill}
              style={{ width: `${stat.base_stat}%` }}
            />
          </div>
        </div>
      ))}
    </DetailCard>
  );
};

const styles = {
  item: style({
    display: "flex",
    gap: 10,
    fontSize: 15,
    letterSpacing: -0.408,
  }),
  itemName: style({
    width: 120,
    color: baseColors.textMidGrey,
  }),
  itemValue: style({
    fontWeight: 500,
    color: baseColors.blackLight,
  }),
  statBar: style({
    position: "relative",
    width: 200,
    height: 4,
    borderRadius: 100,
    background: baseColors.grey,
    marginTop: 10,
  }),
  statBarFill: style({
    position: "absolute",
    top: 0,
    left: 0,
    height: 4,
    borderRadius: 100,
    // TODO - check how to make this work. It's not working because there's only one div in this container.
    $nest: {
      "&:nth-child(even)": {
        background: baseColors.statGreen,
      },
      "&:nth-child(odd)": {
        background: baseColors.statRed,
      },
    },
  }),
};
