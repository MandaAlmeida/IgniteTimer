import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { useState } from "react";
import { GlobalStyle } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { lightTheme } from "../../styles/themes/light";

export function DefaultLayout() {
  const [light, setLight] = useState(false);

  function setTheme() {
    setLight((prevTheme) => !prevTheme);
  }

  const theme = light ? lightTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <Header onTheme={setTheme} light={light} />
        <Outlet />
        <GlobalStyle />
      </LayoutContainer>
    </ThemeProvider>
  );
}
