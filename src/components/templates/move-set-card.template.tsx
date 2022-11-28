import React, { FC } from "react";
import { style } from "typestyle";
import { IModel } from "../../state/interfaces/model.interface";
import { DetailCard } from "../elements/detail-card.element";

interface IProps {
  moves: {
    move: IModel;
  }[];
}

export const MovesetCard: FC<IProps> = ({ moves }) => {
  return (
    <DetailCard name="Moveset">
      <div className={styles.movesetContainer}>
        {moves.map((move) => (
          <div key={move.move.name} className={styles.item}>
            <div className={styles.levelPill}>level</div>
            <div className={styles.itemName}>
              <h4>{move.move.name} </h4>
            </div>
          </div>
        ))}
      </div>
    </DetailCard>
  );
};

const styles = {
  movesetContainer: style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gridTemplateRows: "auto",
    columnGap: 10,
    rowGap: "1rem",
    gridGap: 10,
  }),
  levelPill: style({
    width: 67,
    height: 24,
    textAlign: "center",
    background:
      "linear-gradient(109.73deg, rgba(70, 70, 156, 0.2) 0%, rgba(126, 50, 224, 0.2) 100%)",
    borderRadius: 30,
    color: "#643CC0",
    border: "1px solid #643CC0",
  }),
  item: style({
    display: "flex",
    gap: 10,
    fontSize: 15,
    letterSpacing: -0.408,
  }),
  itemName: style({
    width: 120,
  }),
};
