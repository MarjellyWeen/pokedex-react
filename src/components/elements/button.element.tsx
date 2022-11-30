import React, { ButtonHTMLAttributes, FC } from "react";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";

export type ButtonProps = {
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  text?: string;
};

/** A custom button element. */
export const ButtonElement: FC<ButtonProps> = (props) => {
  return (
    <button
      {...{
        ...props.attributes,
        className: classes(styles.button, props.attributes?.className),
      }}
    >
      <div className={styles.text}>{props.text}</div>
    </button>
  );
};

const styles = {
  button: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "7px 8px",
    gap: 6,
    width: "90%",
    height: 44,
    borderRadius: 100,
    outline: "none",
    borderWidth: 0,
    background: baseColors.blackLight,
    color: baseColors.white,
  }),
  text: style({
    fontWeight: 700,
    fontSize: 17,
    color: baseColors.white,
  }),
};
