import React, { FC } from "react";
import { style } from "typestyle";
import { IPokemon } from "../../state/interfaces/pokemon.interface";
import { baseColors, typeColors } from "../../styling/colors.constant";
import { DetailCard } from "../elements/detail-card.element";

interface IProps {
  pokemon: IPokemon;
}

export const AboutCard: FC<IProps> = ({ pokemon }) => {
  return (
    <DetailCard name="About">
      <div className={styles.item}>
        <div className={styles.itemName}>Type</div>
        <div className={styles.typeContainer}>
          {pokemon?.types.map((typeSlot) => (
            <div
              className={styles.type}
              key={`${pokemon.name}-${typeSlot.type.name}`}
              style={{
                background: typeColors[typeSlot.type.name ?? "normal"],
              }}
            >
              {typeSlot.type.name}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemName}>Number</div>
        <div className={styles.itemValue}>
          #{pokemon?.id.toString().padStart(3, "0")}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemName}>Height</div>
        <div className={styles.itemValue}>#{pokemon?.height}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemName}>Weight</div>
        <div className={styles.itemValue}>#{pokemon?.weight}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemName}>Base XP</div>
        <div className={styles.itemValue}>#{pokemon?.base_experience}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemName}>First Ability</div>
        <div className={styles.itemValue}>
          #{pokemon?.abilities[0].ability.name}
        </div>
      </div>
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
  typeContainer: style({
    display: "flex",
    flexDirection: "row",
    gap: 5,
  }),
  type: style({
    alignItems: "flex-start",
    padding: "3px 10px",
    height: 20,
    borderRadius: 100,
    fontSize: 12,
    textAlign: "center",
    color: baseColors.white,
  }),
};
