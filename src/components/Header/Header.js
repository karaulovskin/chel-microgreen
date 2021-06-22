import React from "react";
import { Root, Row } from "./styles";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Socials from "../Socials/Socials";

const Header = () => {
  return (
    <Root>
      <Row>
        <Logo />
        <Nav />
        <Socials />
      </Row>
    </Root>
  )
}

export default Header;