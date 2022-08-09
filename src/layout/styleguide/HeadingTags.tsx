import styled from "@emotion/styled";
import React from "react";
import { Column } from "../Column";
import { Row } from "../Row";

const text = "IRS België is een IT infrastructuur oplossingen provider.";

export function HeadingTags() {
  return (
    <>
      <Column breakpoints={{ phone: 4 }}>
        <StyledItemTitle>HTML Heading Tags</StyledItemTitle>
      </Column>
      <Column breakpoints={{ phone: 8 }}>
        <StyledSubItemTitle>H1</StyledSubItemTitle>
        <h1>{text}</h1>
        <StyledSubItemTitle>H2</StyledSubItemTitle>
        <h2>{text}</h2>
        <StyledSubItemTitle>H3</StyledSubItemTitle>
        <h3>{text}</h3>
        <StyledSubItemTitle>H4</StyledSubItemTitle>
        <h4>{text}</h4>
        <StyledSubItemTitle>H5</StyledSubItemTitle>
        <h5>{text}</h5>
        <StyledSubItemTitle>H6</StyledSubItemTitle>
        <h6>{text}</h6>
      </Column>
    </>
  );
}

const StyledItemTitle = styled.p`
  width: fit-content;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
  background: #eff6fc;
  font-weight: 900;
  letter-spacing: 0.15rem;
  color: #034c87;
`;

const StyledSubItemTitle = styled(StyledItemTitle)`
  padding: 0.6rem 0.8rem;
  margin-bottom: 1.5rem;
`;
