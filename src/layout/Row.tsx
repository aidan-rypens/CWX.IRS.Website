import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ComponentPropsWithoutRef } from "react";

import { Breakpoints } from "../types";
import { forBreakpoints } from "../utils/forBreakpoints";

type Props<T> = {
  as?: T;
  spacing?: Breakpoints<number | [number, number]>;
};

export function Row<T extends keyof JSX.IntrinsicElements>(
  props: Props<T> & ComponentPropsWithoutRef<T>
) {
  return <StyledRow {...(props as any)} />;
}

const StyledRow = styled.div<Props<unknown>>`
  display: flex;
  flex-wrap: wrap;
  ${(props) =>
    props.spacing &&
    forBreakpoints(props.spacing, (value) => {
      const [x, y] = typeof value === "number" ? [value, value] : value;

      return css`
        margin: -${y / 2}rem -${x / 2}rem;
        & > * {
          padding: ${y / 2}rem ${x / 2}rem;
        }
      `;
    })};
`;
