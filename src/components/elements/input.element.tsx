import React, { InputHTMLAttributes } from "react";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";

type Props = {
  attributes?: InputHTMLAttributes<HTMLInputElement>;
};

export function InputElement(props: Props): JSX.Element {
  return (
    <input
      {...{
        ...props.attributes,
        className: classes(styles.input, props.attributes?.className),
      }}
    />
  );
}

const styles = {
  input: style({
    display: "flex",
    alignItems: "center",
    padding: "7px 8px",
    gap: 6,
    width: "95%",
    height: 36,
    borderRadius: 8,
    outline: "none",
    borderWidth: 0,
    background: baseColors.grey,
  }),
};
