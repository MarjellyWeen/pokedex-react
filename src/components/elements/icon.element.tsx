import React, { FC } from "react";

import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilter,
  faArrowRightArrowLeft,
  faChevronRight,
  faChevronLeft,
  faMagnifyingGlass,
  faXmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

library.add(
  faHeart,
  faFilter,
  faArrowRightArrowLeft,
  faChevronRight,
  faChevronLeft,
  faMagnifyingGlass,
  faXmark
);

export type IconProps = Omit<FontAwesomeIconProps, "icon"> & {
  icon: IconProp;
};

/**
 * Represents an inline icon element.
 *
 * ** You have to import every icon you use from fontawesome! **
 */
export const Icon: FC<IconProps> = (props) => {
  return <FontAwesomeIcon {...(props as FontAwesomeIconProps)} />;
};
