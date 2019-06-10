import React from 'react';
import PropTypes from 'prop-types';

import Table from './Table'

import whiteLogo from "../static/nav2.png";

import 'bulma/css/bulma.min.css'
import './Body.css'


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ranking: 'all',
            year: 'all',
            pageindex: 1,
            perpage: 'all',
        }
    }

    render() {
        const header = (
            <section className="hero is-dark is-large has-bg-img">
                <div className="hero-body">
                    <div className="container has-text-centered">
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

        const rankingDropdown = (
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button
                        className="button is-light"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu">
                        <span>Ranking</span>
                        <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="/" className="dropdown-item is-active">All</a>
                        <hr className="dropdown-divider" />
                        <a href="/" className="dropdown-item">QS</a>
                        <a href="/" className="dropdown-item">US News</a>
                        <a href="/" className="dropdown-item">Times</a>
                        <a href="/" className="dropdown-item">ARWU</a>
                    </div>
                </div>
            </div>
        );

        const yearDropdown = (
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button
                        className="button is-light"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu">
                        <span>Year</span>
                        <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="/" className="dropdown-item">All</a>
                        <hr className="dropdown-divider" />
                        <a href="/" className="dropdown-item">2019</a>
                        <a href="/" className="dropdown-item">2018</a>
                        <a href="/" className="dropdown-item">2017</a>
                        <a href="/" className="dropdown-item">2016</a>
                        <a href="/" className="dropdown-item">2015</a>
                    </div>
                </div>
            </div>
        );

        const perPageDropdown = (
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button
                        className="button is-light"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu">
                        <span>Results per page</span>
                        <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="/" className="dropdown-item">All</a>
                        <hr className="dropdown-divider" />
                        <a href="/" className="dropdown-item">50</a>
                        <a href="/" className="dropdown-item">25</a>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                {header}
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-half-desktop is-three-quarters-tablet is-full-mobile">
                            <div className="level is-mobile">
                                <div className="level-left">
                                    <div className="level-item">
                                        {rankingDropdown}
                                    </div>
                                    <div className="level-item">
                                        {yearDropdown}
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <button className="button is-light">&lt;</button>
                                        <span>1 / 7</span>
                                        <button className="button is-light">&gt;</button>
                                    </div>
                                    <div className="level-item">
                                        {perPageDropdown}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <Table search={this.props.search} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

Body.propTypes = {
    search: PropTypes.string
};

export default Body;
