import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { InputHTMLAttributes } from "react";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";
import { Icon } from "./icon.element";

export type InputProps = {
  attributes?: InputHTMLAttributes<HTMLInputElement>;
  iconName?: IconProp;
};

export function InputElement(props: InputProps): JSX.Element {
  return (
    <div className={styles.inputContainer}>
      <input
        {...{
          ...props.attributes,
          className: classes(styles.input, props.attributes?.className),
        }}
        style={{ paddingLeft: props.iconName && 30 }}
      />
      {props.iconName && <Icon icon={props.iconName} className={styles.icon} />}
    </div>
  );
}

const styles = {
  inputContainer: style({
    position: "relative",
  }),
  input: style({
    display: "flex",
    alignItems: "center",
    padding: "7px 8px",
    gap: 6,
    width: "90%",
    height: 36,
    borderRadius: 8,
    outline: "none",
    borderWidth: 0,
    background: baseColors.grey,
  }),
  icon: style({
    position: "absolute",
    left: 0,
    top: 10,
    padding: "7px 8px",
    color: baseColors.textGrey,
  }),
};
