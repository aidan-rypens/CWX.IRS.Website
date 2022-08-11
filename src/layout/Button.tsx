import styled from "@emotion/styled";
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import { Button as ButtonType } from "../types";
import { buttons } from "./irs/irs.theme.constants";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  text: string;
  mode: ButtonType;
  icon?: ReactNode;
  iconOnly?: boolean;
};

export const Button = forwardRef<
  HTMLButtonElement,
  Props & ComponentPropsWithoutRef<"button">
>((props, ref) => {
  const { text, icon, iconOnly } = props;

  return (
    <StyledButton
      ref={ref}
      title={text}
      as={props.as || "button"}
      {...(props as any)}
    >
      {icon}
      {(!icon || !iconOnly) && text}
    </StyledButton>
  );
});

const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Futura";
  font-size: 1rem;
  letter-spacing: 0.05rem;
  border: none;
  cursor: pointer;
  padding: ${(props) =>
    props.iconOnly ? "0" : props.icon ? "0 1rem 0 0" : ".5rem 2.5rem"};
  border-radius: ${(props) => (props.iconOnly ? "50%" : "0")};
  text-decoration: none;
  transition: color 0.25s ease, background-color 0.25s ease, opacity 0.25s ease;
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  ${(props) => buttons[props.mode]};
`;
