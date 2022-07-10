import styled from "@emotion/styled";
import React from "react";

export default function Styleguide() {
  return (
    <>
      <StyledHeading>Styleguide Guide.</StyledHeading>
      <StyledSub>Nicholas Van Beylen - Crossworx</StyledSub>
      <StyledDivider />
      <StyledItemTitle>HTML Heading Tags</StyledItemTitle>
      <br />
      <br />
      <StyledSubItemTitle>H1</StyledSubItemTitle>
      <h1>IRS België is een IT infrastructuur oplossingen provider.</h1>
    </>
  );
}

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #034c87;
  margin-bottom: 0rem;
`;

const StyledSub = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: #034c87;
  margin: 2rem 0;
`;

const StyledItemTitle = styled.div`
  display: inline-block;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
  background: #eff6fc;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.15rem;
  color: #034c87;
`;

const StyledSubItemTitle = styled(StyledItemTitle)`
  padding: 0.35rem 0.85rem;
`;
