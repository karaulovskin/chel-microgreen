import React from 'react';
import logo from './logo.jpg';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <div className={s.root}>
            <picture className={s.picture}>
                <img src={ logo } alt="Chel Micro Green"/>
            </picture>
        </div>
    )
}

export default Logo;