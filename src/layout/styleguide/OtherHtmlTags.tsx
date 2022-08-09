import styled from "@emotion/styled";
import React from "react";
import { Column } from "../Column";

const longLorum = `In presentations, you often require 'dummy text' to fill out the
places where actual text will go once the money men buy it from some
other overpriced consultant. Historically, this dummy text is a
block of fake latin boilerplate that begins with 'Lorem Ipsum'. It
fills up the space with sentences and paragraphs, but it's been used
so long by so many that - like banner ads and tv commercials -
people just gloss over it without paying any attention to the
contents. Herein lies your opportunity to subvert the timeless
standard.`;

export function OtherHtmlTags() {
  return (
    <>
      <Column breakpoints={{ phone: 4 }}>
        <StyledItemTitle>Other html tags</StyledItemTitle>
      </Column>
      <Column breakpoints={{ phone: 8 }}>
        <StyledSubtileDivider />
        <StyledSubItemTitle>paragraph</StyledSubItemTitle>
        <StyledP>{longLorum}</StyledP>
        <StyledSubItemTitle>links</StyledSubItemTitle>
        <a href="https://crossworx.be">Text link</a>
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

const StyledSubtileDivider = styled.div`
  background: #eff6fc;
  width: calc(100% - 2rem);
  height: 0.1rem;
  margin: 1rem 0rem 5rem 2rem;
`;

const StyledP = styled.p`
  margin-bottom: 4rem;
`;

const StyledSubItemTitle = styled(StyledItemTitle)`
  padding: 0.6rem 0.8rem;
  margin-bottom: 1.5rem;
`;
