import React, { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { Text as TextType } from "../../../types";
import { css, SerializedStyles } from "@emotion/react";

type Props = {
  as: TextType;
};

export function Text(props: Props & ComponentPropsWithoutRef<"p">) {
  return <StyledText {...(props as any)} />;
}

const texts: Record<TextType, SerializedStyles> = {
  "text-small": css`
    font-size: 1.14rem;
  `,
  "text-medium": css`
    font-size: 0.8rem;
  `,
  "text-large": css`
    font-size: 1.5rem;
  `,
  "text-xlarge": css`
    font-size: 2rem;
  `,
};

const StyledText = styled.span<Props>`
  position: relative;
  color: black;
  text-align: left;
  font-weight: bold;
  ${(props) => texts[props.as as TextType]};
`;
