import React, {
  HTMLAttributes,
  PropsWithChildren,
  TouchEvent,
  useLayoutEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { classes, style } from "typestyle";
import { baseColors } from "../../styling/colors.constant";
import { Icon } from "./icon.element";

export type PopoverProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren<{
    toggled?: boolean;
    onCloseClick?(): void;
  }>;

/**
 * Presents content in a box that pops over (on top of) other content.
 */
export function Popover({
  children,
  onCloseClick,
  toggled = false,
  ...htmlAttributes
}: PopoverProps): JSX.Element | null {
  const container = useRef(document.getElementById("popover")).current;

  const stopTouchPropagation = useRef((event: TouchEvent<HTMLDivElement>) =>
    event.stopPropagation()
  ).current;

  useLayoutEffect(() => {
    document.body.style.overflow = toggled ? "hidden" : "";
  }, [toggled]);

  if (!container) return null;

  return createPortal(
    toggled ? (
      <div
        onClick={onCloseClick}
        {...htmlAttributes}
        className={classes(styles.container, htmlAttributes.className)}
        onTouchStart={stopTouchPropagation}
        onTouchMove={stopTouchPropagation}
        onTouchEnd={stopTouchPropagation}
      >
        <div className={styles.window} onClick={(e) => e.stopPropagation()}>
          <div className={styles.closeBarContainer}>
            <div onClick={onCloseClick} className={styles.closeBar} />
          </div>
          <div onClick={onCloseClick} className={styles.closeButtonContainer}>
            <Icon icon={"xmark"} />
          </div>

          {children}
        </div>
      </div>
    ) : null,
    container
  );
}

export const styles = {
  container: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 999,
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(1px)",
  }),

  window: style({
    display: "flex",
    flexDirection: "column",
    height: 356,
    background: baseColors.white,
    overflow: "hidden",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  }),

  closeBarContainer: style({
    display: "flex",
    alignItems: "center",
    height: 30,
    position: "relative",
    zIndex: 2,
  }),

  closeBar: style({
    background: baseColors.grey,
    marginLeft: "auto",
    marginRight: "auto",
    width: 48,
    height: 3,
  }),

  spacer: style({ height: 30 }),

  closeButtonContainer: style({
    position: "absolute",
    right: 0,
    margin: 10,
    width: 30,
    height: 30,
    borderRadius: "50%",
    background: baseColors.darkGrey,
    color: baseColors.white,
    $nest: {
      svg: {
        margin: "8px 10px",
      },
    },
  }),

  content: style({
    display: "flex",
    marginTop: -30,
  }),
};
