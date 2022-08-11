import React, { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { TextColor, TextStyle, TextType, TextWeight } from "../types";
import { colors, texts, textStyles, weights } from "./irs/irs.theme.constants";

type Props = {
  type?: TextType;
  weight?: TextWeight;
  textStyle?: TextStyle;
  color?: TextColor;
};

export function Text({
  type = "text-medium",
  weight = "text-weight-normal",
  color,
  style,
  ...props
}: Props & ComponentPropsWithoutRef<"p">) {
  return (
    <StyledText
      type={type}
      weight={weight}
      textStyles={textStyles}
      color={color}
      {...(props as any)}
    />
  );
}

const StyledText = styled.span<Props>`
  position: relative;
  color: black;
  text-align: left;
  ${(props) => texts[props.type as TextType]};
  ${(props) => weights[props.weight as TextWeight]};
  ${(props) => textStyles[props.textStyle as TextStyle]};
  ${(props) => colors[props.color as TextColor]};
`;
