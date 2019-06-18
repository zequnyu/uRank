import React from 'react';

import blackLogo from  '../static/nav1.png'

import 'bulma/css/bulma.min.css'
import '../styles/Footer.css'


function Footer(props) {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p className="is-size-6 is-size-7-mobile">
                    <img className="footer-img" src={blackLogo} alt="Black Logo" /> is developed with ❤️ by
                    <a href="https://zequnyu.com" target="_blank" rel="noopener noreferrer"> Zequn Yu</a>
                </p>
            </div>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
