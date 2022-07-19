import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ComponentPropsWithoutRef } from "react";

import { breakpoints } from "../constants";
import { Breakpoints } from "../types";
import { forBreakpoints } from "../utils/forBreakpoints";

type Props<T> = {
  as?: T;
  edges?: Breakpoints<string | [string, string]>;
};

export function Container<T extends keyof JSX.IntrinsicElements>(
  props: Props<T> & ComponentPropsWithoutRef<T>
) {
  return <StyledContainer {...(props as any)} />;
}

const StyledContainer = styled.div<Props<unknown>>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1rem;
  ${(props) =>
    props.edges &&
    css`
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        width: calc((100vw - 100%) / 2 + 1rem + 1px);
        height: 100%;
        z-index: -1;
      }
      ${forBreakpoints(props.edges, (value) => {
        const [before, after] =
          typeof value === "string" ? [value, value] : value;

        return css`
          &::before {
            left: calc((100vw - 100%) / -2);
            background-color: ${before};
          }
          &::after {
            right: calc((100vw - 100%) / -2);
            background-color: ${after};
          }
        `;
      })};
    `};
  ${forBreakpoints(
    breakpoints,
    (value) => css`
      width: calc(${value ? `${value - 1}rem` : "100%"} - 1rem);
    `
  )};
`;
