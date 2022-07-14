import React, { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { TextType, TextWeight } from "../../../types";
import { css, SerializedStyles } from "@emotion/react";

type Props = {
  type: TextType;
  weight?: TextWeight;
};

export function Text({
  type,
  weight = "text-weight-normal",
  ...props
}: Props & ComponentPropsWithoutRef<"p">) {
  return <StyledText type={type} weight={weight} {...(props as any)} />;
}

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

const StyledText = styled.span<Props>`
  position: relative;
  color: black;
  text-align: left;
  ${(props) => texts[props.type as TextType]};
  ${(props) => weights[props.weight as TextWeight]};
`;
