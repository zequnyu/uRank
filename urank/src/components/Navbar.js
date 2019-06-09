import React from 'react'
import PropTypes from 'prop-types';

import blackLogo from  '../static/nav1.png'

import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            burgerActive: false
        };
        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }


    handleBurgerClick() {
        this.setState({burgerActive: !this.state.burgerActive})
    }

    render() {
        console.log(this.state.burgerActive);
        return (
            <nav className="navbar is-light is-fixed-top">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img src={blackLogo} alt="Black Logo" />
                        </a>
                        <span className={this.state.burgerActive ? "navbar-burger burger is-active" :
                            "navbar-burger burger"}
                              data-target="navbarMenuHeroA"
                              onClick={this.handleBurgerClick}
                        >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </div>
                    <div id="navbarMenuHeroA"
                         className={this.state.burgerActive ? "navbar-menu is-active": "navbar-menu"}
                    >
                        <div className="navbar-end">
                            <a className="navbar-item" href="/">
                                Home
                            </a>
                            <a className="navbar-item" href="/">
                                About
                            </a>
                            <span className="navbar-item">
                            {this.props.input}
                        </span>
                            <span className="navbar-item">
                            <a className="button is-dark" href="https://github.com/zequnyu/urank" target="_blank"
                               rel="noopener noreferrer">
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
}

Navbar.propTypes = {
    input: PropTypes.element
};

export default Navbar;
