import styled from "@emotion/styled";
import React from "react";
import { Container } from "../layout/Container";
import { Row } from "../layout/Row";
import { HeadingTags } from "../layout/styleguide/HeadingTags";
import { OtherHtmlTags } from "../layout/styleguide/OtherHtmlTags";

export default function Styleguide() {
  return (
    <Container>
      <StyledHeading>Styleguide Guide.</StyledHeading>
      <StyledSub>Nicholas Van Beylen - Crossworx</StyledSub>
      <StyledDivider />
      <StyledRow>
        <HeadingTags />
      </StyledRow>
      <StyledRow>
        <OtherHtmlTags />
      </StyledRow>
    </Container>
  );
}

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #034c87;
  margin: 1rem 0 1rem 0;
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

const StyledRow = styled(Row)`
  margin-bottom: 4rem;
`;
