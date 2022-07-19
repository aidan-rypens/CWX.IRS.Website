import React, { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { TextColor, TextStyle, TextType, TextWeight } from "../../../types";
import { css, SerializedStyles } from "@emotion/react";

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

const textStyles: Record<TextStyle, SerializedStyles> = {
  "text-style-subheading": css`
    font-size: 1.56rem;
    color: #034d89;
    opacity: 0.42;
  `,
};

const texts: Record<TextType, SerializedStyles> = {
  "text-small": css`
    font-size: 0.875rem;
  `,
  "text-medium": css`
    font-size: 1.25rem;
  `,
  "text-large": css`
    font-size: 1.5rem;
  `,
  "text-xlarge": css`
    font-size: 2rem;
  `,
};

const weights: Record<TextWeight, SerializedStyles> = {
  "text-weight-bold": css`
    font-weight: 800;
  `,
  "text-weight-semibold": css`
    font-weight: 700;
  `,
  "text-weight-medium": css`
    font-weight: 500;
  `,
  "text-weight-normal": css`
    font-weight: 400;
  `,
  "text-weight-light": css`
    font-weight: 300;
  `,
};

const colors: Record<TextColor, SerializedStyles> = {
  "text-color-white": css`
    color: white;
  `,
  "text-color-secondary": css`
    color: #034c87;
  `,
  "text-color-accent": css`
    color: #00a8ec;
  `,
};

const StyledText = styled.span<Props>`
  position: relative;
  color: black;
  text-align: left;
  ${(props) => texts[props.type as TextType]};
  ${(props) => weights[props.weight as TextWeight]};
  ${(props) => textStyles[props.textStyle as TextStyle]};
  ${(props) => colors[props.color as TextColor]};
`;
