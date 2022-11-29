import React, { FC } from "react";
import { keyframes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";

export type props = {
  show: boolean;
};

export const Spinner: FC<props> = ({ show }) => {
  return (
    <div className={show ? styles.container : styles.hiddenContainer}>
      <div className={styles.bar} />
    </div>
  );
};

const loadAnim = keyframes({
  "0%": {},
  "100%": {
    transform: "translate(0, 0)",
  },

  "50%": {
    transform: "translate(80px, 0)",
    backgroundColor: baseColors.grey,
    width: 25,
  },
});

const styles = {
  container: style({
    float: "left",
    width: 100,
    height: 100,
    padding: "20px 20px 20px",
    borderRadius: 5,
    textAlign: "center",
    margin: "0 29%",
  }),
  hiddenContainer: style({
    display: "none",
  }),
  load: style({}),
  bar: style({
    float: "left",
    width: 15,
    height: 6,
    borderRadius: 2,
    backgroundColor: baseColors.textGrey,
    animation: loadAnim,
    animationIterationCount: "infinite",
    animationDuration: "2s",
    animationTimingFunction: "cubic-bezier(0.17, 0.37, 0.43, 0.67)",
  }),
};
