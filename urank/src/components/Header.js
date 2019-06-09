import React from 'react';

import whiteLogo from '../static/nav2.png'

import 'bulma/css/bulma.min.css'


function Header(props) {
    return (
        <section className="hero is-primary is-medium">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        <img src={whiteLogo} alt="White Logo" />
                    </h1>
                    <h2 className="subtitle">
                        The ultimate collection of university rankings
                    </h2>
                </div>
            </div>
        </section>
    );
}

Header.prototype = {};

export default Header;
