import React from 'react';
import './header.styles.scss';
import Logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <header data-test="headerComponent">
            <div className="header-wrapper">
                <div className="logo">
                    <img data-test="logo-img" alt="logo" src={Logo} />
                </div>
            </div>
        </header>
    )
}

export default Header;