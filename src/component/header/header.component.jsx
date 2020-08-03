import React from 'react';
import './header.styles.scss';
import Logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <img alt="logo" src={Logo} />
                </div>
            </div>
        </header>
    )
}

export default Header;