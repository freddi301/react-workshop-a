import React from "react";
import logo from "src/logo.svg";
import styled, { ThemeProvider, css } from "styled-components/macro";
import { useMyTheme } from "src/theme/mytheme";
import { ThemeSwitcher } from "src/theme/ThemeSwitcher";
import { Arcobaleno } from "src/Arcobaleno";
import { TitleChanger } from "src/TitleChanger";
import { LikeCounter } from "src/LikeCounter";

/**
 * App root component
 */
const App = () => {
  const [theme, setThemeName] = useMyTheme(); // utilizziamo la custom hook del nostro tema
  return (
    <ThemeProvider
      theme={theme} /* forniamo agli styled component il contesto del tema*/
    >
      <StyledContainer>
        <StyledHeader>
          <img
            src={logo}
            alt="logo"
            css={css`
              width: 1em;
              height: 1em;
            `}
          />
          Workshop (react + hooks + typescript)
        </StyledHeader>
        <StyledSection>
          <LikeCounter />
        </StyledSection>
        <StyledSection>
          <TitleChanger />
        </StyledSection>
        <StyledSection>
          <Arcobaleno />
        </StyledSection>
        <StyledSection>
          <ThemeSwitcher onChange={setThemeName} />
        </StyledSection>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;

// il tema è accessibile tramite la prop theme
const StyledContainer = styled.div`
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  color: ${({ theme: { textColor } }) => textColor};
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const StyledSection = styled.div`
  margin: 32px;
`;
