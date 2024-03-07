import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logo from "/Logo.png";
import { Timer, Scroll } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo fo ignite" />

      <nav>
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
