import React from "react";
import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <StyledHeroContainer>
      <StyledHeading>
        <b>IRS België</b> is een IT
        <br /> infrastructuur oplossingen
        <br /> provider.
      </StyledHeading>
      <StyledDescription>
        Wij ontzorgen middelgrote tot grote klanten met cash terminals, IT
        devices en oplossingen op maat.
      </StyledDescription>
      <StyledTelCTA title={"IRS Bellen"}>+32 3 450 85 85</StyledTelCTA>
    </StyledHeroContainer>
  );
}

const StyledHeroContainer = tw.div`
  h-screen
  flex
  flex-col
  justify-center
  items-start
`;

const StyledHeading = tw.h1`
  text-5xl
  text-sky-700
  mb-5
`;

const StyledDescription = tw.p`
  text-xl
  max-w-sm
  mb-10
`;

const StyledTelCTA = tw.button`
  text-sky-700
  border-sky-700
  border-2
  p-2
  pl-3 pr-3
`;
