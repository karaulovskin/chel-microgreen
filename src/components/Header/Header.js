import React from "react";
import { Root, Row } from './styles';
import Logo from '../Logo/Logo';
import Socials from "../Socials/Socials";

const Header = () => {
    return (
        <Root>
            <Row>
                <Logo />
                <Socials />
            </Row>
        </Root>
    )
}

export default Header;