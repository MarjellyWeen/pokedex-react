import React, { FC, MutableRefObject, useRef } from "react";
import { InputProps, InputElement } from "../elements/input.element";

interface IProps extends InputProps {
  inputClassName?: string;
  containerClassName?: string;
  onChangeTimeoutMilliseconds?: number;
  placeholder?: string;
}

export const SearchInput: FC<IProps> = (props) => {
  const searchTimeout: MutableRefObject<number | null> = useRef(null);

  return (
    <InputElement
      {...props}
      attributes={{
        ...{
          className: props.inputClassName,
          placeholder: props.placeholder ?? "Zoeken",
        },
        ...props.attributes,
        ...{
          onChange: (event) => {
            if (props.onChangeTimeoutMilliseconds) {
              // if searchTimeout is set, clear the current time out
              if (searchTimeout.current) {
                window.clearTimeout(searchTimeout.current);
                searchTimeout.current = null;
              }
              searchTimeout.current = window.setTimeout(() => {
                props.attributes?.onChange?.(event);
              }, props.onChangeTimeoutMilliseconds);
            } else {
              props.attributes?.onChange?.(event);
            }
          },
        },
      }}
    />
  );
};
