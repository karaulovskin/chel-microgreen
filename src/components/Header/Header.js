import s from './Header.module.css';

import React from "react";
import Logo from '../Logo/Logo';
import Socials from "../Socials/Socials";

const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.row}>
                <Logo />
                <Socials />
            </div>
        </header>
    )
}

export default Header;