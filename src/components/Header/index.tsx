import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logo from "/Logo.png";
import { Timer, Scroll, SunDim, Moon } from "@phosphor-icons/react";

interface HeaderProps {
  onTheme: () => void;
  light: boolean;
}

export function Header({ onTheme, light }: HeaderProps) {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo do ignite" />

      <nav>
        <NavLink to="#" onClick={onTheme} className="transitionTheme">
          {light ? (
            <SunDim size={24} className={light ? "light" : "dark"} />
          ) : (
            <Moon size={24} className={light ? "dark" : "light"} />
          )}
        </NavLink>

        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
