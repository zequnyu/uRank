import React from 'react';
import PropTypes from 'prop-types';

import whiteLogo from '../static/nav2.png';
import qsBg from '../static/qs.png'
import usnewsBg from '../static/usnews.png'
import timesBg from '../static/times.png'
import arwuBg from '../static/arwu.png'
import allBg from '../static/all.png'

import 'bulma/css/bulma.min.css'


function Header(props) {
    let bg, rankingInfo, yearInfo;
    switch (props.ranking) {
        case 'qs':
            bg = qsBg;
            break;
        case 'usnews':
            bg = usnewsBg;
            break;
        case 'times':
            bg = timesBg;
            break;
        case 'arwu':
            bg = arwuBg;
            break;
        default:
            bg = allBg;
    }
    let bgStyles = {
        background: `url(${bg}) center center / cover no-repeat fixed`,
    };

    if (props.ranking === 'all') {
        rankingInfo = 'average of qs, usnews, times, arwu ranking in '
    } else {
        rankingInfo = props.ranking + ' ranking in '
    }

    if (props.year === 'all') {
        yearInfo = '2015 - 2019'
    } else {
        yearInfo = props.year
    }

    return(
        <section
            className="hero is-dark is-medium"
            style={bg === null ? null : bgStyles}
        >
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        <img src={whiteLogo} alt="White Logo" />
                    </h1>
                    <h2 className="subtitle">
                        {rankingInfo + yearInfo}
                    </h2>
                </div>
            </div>
        </section>
    );
}

Header.propTypes = {
    ranking: PropTypes.string,
    year: PropTypes.string
};

export default Header;
