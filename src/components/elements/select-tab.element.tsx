import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { FC } from "react";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";
import { Icon } from "./icon.element";

export type ButtonProps = {
  text?: string;
  icon?: IconProp;
  isSelected?: boolean;
};

/** A custom fake button element */
export const SelectTab: FC<ButtonProps> = (props) => {
  return (
    <div className={classes(styles.tab, props.isSelected && styles.selected)}>
      {props.icon && (
        <div className={styles.icon}>
          <Icon icon={props.icon} />
        </div>
      )}
      <div className={styles.text}>{props.text}</div>
      {props.isSelected && <Icon icon="check" />}
    </div>
  );
};

const styles = {
  tab: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "7px 8px",
    gap: 6,
    width: "90%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0,
    background: baseColors.midGrey,
    color: baseColors.textGrey,
  }),
  text: style({
    color: baseColors.blackLight,
  }),
  selected: style({}),
  icon: style({
    width: 20,
  }),
};
