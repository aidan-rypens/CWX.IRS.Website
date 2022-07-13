import styled from "@emotion/styled";
import React from "react";
import { Column } from "../components/layout/Column";
import { Container } from "../components/layout/Container";
import { Text } from "../components/layout/irs/Text";
import { Row } from "../components/layout/Row";

export default function Styleguide() {
  return (
    <Container>
      <StyledHeading>Styleguide Guide.</StyledHeading>
      <StyledSub>Nicholas Van Beylen - Crossworx</StyledSub>
      <StyledDivider />
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>HTML Heading Tags</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubItemTitle>H1</StyledSubItemTitle>
          <h1>IRS België is een IT infrastructuur oplossingen provider.</h1>
          <StyledSubItemTitle>H2</StyledSubItemTitle>
          <h2>IRS België is een IT infrastructuur oplossingen provider.</h2>
          <StyledSubItemTitle>H3</StyledSubItemTitle>
          <h3>IRS België is een IT infrastructuur oplossingen provider.</h3>
          <StyledSubItemTitle>H4</StyledSubItemTitle>
          <h4>IRS België is een IT infrastructuur oplossingen provider.</h4>
          <StyledSubItemTitle>H5</StyledSubItemTitle>
          <h5>IRS België is een IT infrastructuur oplossingen provider.</h5>
          <StyledSubItemTitle>H6</StyledSubItemTitle>
          <h6>IRS België is een IT infrastructuur oplossingen provider.</h6>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Other html tags</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>paragraph</StyledSubItemTitle>
          <StyledP>
            In presentations, you often require 'dummy text' to fill out the
            places where actual text will go once the money men buy it from some
            other overpriced consultant. Historically, this dummy text is a
            block of fake latin boilerplate that begins with 'Lorem Ipsum'. It
            fills up the space with sentences and paragraphs, but it's been used
            so long by so many that - like banner ads and tv commercials -
            people just gloss over it without paying any attention to the
            contents. Herein lies your opportunity to subvert the timeless
            standard.
          </StyledP>
          <StyledSubItemTitle>links</StyledSubItemTitle>
          <a href="https://crossworx.be">Text link</a>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Testimonials</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>.text-testimonials</StyledSubItemTitle>
          <StyledTestimonials>
            In presentations, you often require 'dummy text' to fill out the
            places where actual text will go once the money men buy it from some
            other overpriced consultant. Historically, this dummy text is a
            block of fake latin boilerplate that begins with 'Lorem Ipsum'. It
            fills up the space with sentences and paragraphs, but it's been used
            so long by so many that - like banner ads and tv commercials -
            people just gloss over it without paying any attention to the
            contents. Herein lies your opportunity to subvert the timeless
            standard.
          </StyledTestimonials>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Text sizes</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>.text-xlarge</StyledSubItemTitle>
          <Text as="text-xlarge">
            Fusce arcu ligula, dictum eget velit ac, aliquet fermentum turpis.
          </Text>
        </Column>
      </StyledRow>
    </Container>
  );
}

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #034c87;
  margin-bottom: 0.75rem;
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

const StyledSubtileDivider = styled.div`
  background: #eff6fc;
  width: calc(100% - 3rem);
  height: 0.1rem;
  margin: 1rem 0 3rem 3rem;
`;

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
`;

const StyledRow = styled(Row)`
  margin-bottom: 4rem;
`;

const StyledP = styled.p`
  margin-bottom: 4rem;
`;

const StyledTestimonials = styled.p`
  font-size: 1.14rem;
  font-weight: 700;
`;
