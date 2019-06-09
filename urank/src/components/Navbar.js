import React from 'react'

import blackLogo from  '../static/nav1.png'

import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


function Navbar() {
    return (
        <nav className="navbar is-light is-fixed-top">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={blackLogo} alt="Black Logo" />
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item" href="/">
                            Home
                        </a>
                        <a className="navbar-item" href="/">
                            About
                        </a>
                        <span className="navbar-item">
                            <span className="field">
                                <div className="control has-icons-right">
                                    <input className="input is-light is-rounded" type="email"
                                           placeholder="Search university" />
                                    <span className="icon is-right">
                                        <i className="fas fa-search" />
                                    </span>
                                </div>
                            </span>
                        </span>
                        <span className="navbar-item">
                            <a className="button is-dark" href="https://github.com/zequnyu/urank">
                                <span className="icon">
                                    <i className="fab fa-github" />
                                </span>
                                <span>Github</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.prototype = {};

export default Navbar;
