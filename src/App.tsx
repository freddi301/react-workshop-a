import React from "react";
import logo from "src/logo.svg";
import styled, { ThemeProvider, css } from "styled-components/macro";
import { useMyTheme } from "src/theme/mytheme";
import { ThemeSwitcher } from "src/theme/ThemeSwitcher";
import { Arcobaleno } from "src/Arcobaleno";
import { TitleChanger } from "src/TitleChanger";
import { LikeCounter } from "src/LikeCounter";
import { TodoListA } from "src/todolist/TodoListA";

/**
 * App root component
 */
const App = () => {
  const [themeName, theme, setThemeName] = useMyTheme(); // utilizziamo la custom hook del nostro tema
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
              width: 2em;
              height: 2em;
              vertical-align: middle;
              margin-right: 0.5em;
            `}
          />
          Workshop (react + hooks + typescript)
        </StyledHeader>
        <StyledSection>
          <StyledSectionHeader>Counter</StyledSectionHeader>
          <LikeCounter />
        </StyledSection>
        <StyledSection>
          <StyledSectionHeader>Title Changer</StyledSectionHeader>
          <TitleChanger />
        </StyledSection>
        <StyledSection>
          <StyledSectionHeader>styled-components</StyledSectionHeader>
          <Arcobaleno />
        </StyledSection>
        <StyledSection>
          <StyledSectionHeader>Theme Switcher</StyledSectionHeader>
          <ThemeSwitcher current={themeName} onChange={setThemeName} />
        </StyledSection>
        <StyledSection>
          <StyledSectionHeader>Todo List A</StyledSectionHeader>
          <TodoListA />
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
  font-family: "Roboto Mono", monospace;
  margin: 2em;
  border-radius: 8px;
  padding: 2em;
`;

const StyledHeader = styled.h1`
  text-align: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border-bottom: 1px solid ${({ theme: { borderColor } }) => borderColor};
  margin: -1em -1em 0 -1em;
  border-radius: 8px 8px 0px 0px;
  padding: 1em;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.65); /* https://www.cssmatic.com/box-shadow */
`;

const StyledSection = styled.div`
  margin-bottom: 64px;
`;

const StyledSectionHeader = styled.h2`
  border-bottom: 1px solid ${({ theme: { borderColor } }) => borderColor};
`;
