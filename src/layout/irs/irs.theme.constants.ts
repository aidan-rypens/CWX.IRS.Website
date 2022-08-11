import { SerializedStyles, css } from "@emotion/react";
import {
  Button as ButtonType,
  TextColor,
  TextStyle,
  TextType,
  TextWeight,
} from "../../types";

export const bgDark = "#034C87";
export const bgWhite = "#FFFFFF";
export const bgBlue = "#EFF6FC";
export const bgGrey = "#F9F9F9";

export const buttons: Record<ButtonType, SerializedStyles> = {
  "button-normal": css`
    background-color: #034c87;
    color: white;
  `,
  "button-secondary": css`
    background-color: white;
    color: #034d89;
    border: 4px solid #034c87;
  `,
  "button-invert-colors": css`
    background-color: white;
    color: #034c87;
  `,
  "button-secondary-invert-colors": css`
    background-color: #034d89;
    color: white;
    border: 4px solid white;
  `,
};

export const textStyles: Record<TextStyle, SerializedStyles> = {
  "text-style-subheading": css`
    font-size: 1.56rem;
    color: #034d89;
    opacity: 0.42;
  `,
};

export const texts: Record<TextType, SerializedStyles> = {
  "text-small": css`
    font-size: 0.875rem;
  `,
  "text-medium": css`
    font-size: 1rem;
  `,
  "text-large": css`
    font-size: 1.5rem;
  `,
  "text-xlarge": css`
    font-size: 2rem;
  `,
};

export const weights: Record<TextWeight, SerializedStyles> = {
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

export const colors: Record<TextColor, SerializedStyles> = {
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
