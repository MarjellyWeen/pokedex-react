import React, { FC, useCallback } from "react";
import { style } from "typestyle";
import { baseColors, typeColors } from "../../styling/colors.constant";
import { useNavigate } from "react-router";
import { Icon } from "./icon.element";
import { usePokemon } from "../../state/hooks/usePokemon";

interface IProps {
  pokemonName: string;
}

export const PokemonCard: FC<IProps> = ({ pokemonName }) => {
  const pokemonDetails = usePokemon(pokemonName).pokemon;
  const navigate = useNavigate();

  const handleNavigation = useCallback(() => {
    navigate(`/details/${pokemonName}`);
  }, [navigate, pokemonName]);

  return (
    <div className={styles.item} onClick={handleNavigation}>
      <img src={pokemonDetails?.sprites.front_default} />
      <div className={styles.details}>
        <h3>{pokemonName}</h3>
        <div className={styles.order}>
          {" "}
          #{pokemonDetails?.id.toString().padStart(3, "0")}
        </div>
      </div>
      <div className={styles.typeContainer}>
        {pokemonDetails?.types.map((typeSlot) => (
          <div
            className={styles.type}
            key={`${pokemonName}-${typeSlot.type.name}`}
            style={{
              background: typeColors[typeSlot.type.name ?? "normal"],
            }}
          >
            {typeSlot.type.name}
          </div>
        ))}
      </div>
      <Icon className={styles.icon} icon="chevron-right" />
    </div>
  );
};

const styles = {
  item: style({
    display: "flex",
    height: 70,
    background: baseColors.white,
    boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.04)",
    borderRadius: 10,
    marginBottom: 10,
  }),
  img: style({
    width: 50,
    height: 50,
    margin: "10px 14px",
  }),
  details: style({
    flex: 1,
    margin: "15px 2px",
  }),
  order: style({
    color: baseColors.textGrey,
  }),
  typeContainer: style({
    display: "flex",
    flexDirection: "row",
    gap: 5,
    margin: "16px 0",
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
  icon: style({
    width: 20,
    height: 20,
    margin: "16px 5px",
    color: baseColors.darkGrey,
  }),
};
