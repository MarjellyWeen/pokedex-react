import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { FC } from "react";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";
import { Icon } from "./icon.element";

export type ButtonProps = {
  text?: string;
  icon?: IconProp;
  isSelected?: boolean;
  onClick?: () => void;
};

/** A tab/button element.*/
export const SelectTab: FC<ButtonProps> = (props) => {
  return (
    <div
      className={classes(styles.tab, props.isSelected && styles.selected)}
      onClick={props.onClick}
    >
      <div className={styles.textContainer}>
        {props.icon && (
          <div className={styles.icon}>
            <Icon icon={props.icon} />
          </div>
        )}
        <div className={styles.text}>{props.text}</div>
      </div>
      {props.isSelected && <Icon icon="check" />}
    </div>
  );
};

const styles = {
  tab: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "7px 8px",
    gap: 6,
    height: 40,
    borderRadius: 10,
    borderWidth: 0,
    background: baseColors.midGrey,
    color: baseColors.textGrey,
  }),
  textContainer: style({
    display: "flex",
    flex: 1,
  }),
  text: style({
    color: baseColors.blackLight,
  }),
  selected: style({
    color: baseColors.statGreen,
    border: `1px solid ${baseColors.statGreen}`,
  }),
  icon: style({
    width: 20,
  }),
};
