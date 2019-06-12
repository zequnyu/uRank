import React from 'react';
import PropTypes from 'prop-types';

import 'bulma/css/bulma.min.css'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleHomeAndAboutClick = this.handleHomeAndAboutClick.bind(this);
    }

    handleHomeAndAboutClick(event) {
        event.preventDefault();
        this.props.onItemChange(event);
    }

    render() {
        let items = this.props.items;

        return(
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button
                        className="button is-light"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu">
                        <span>{this.props.title}</span>
                        <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a
                            href="/"
                            className={this.props.active === 'all' ? "dropdown-item is-active" : "dropdown-item"}
                            name="all"
                            title={this.props.title}
                            onClick={this.handleHomeAndAboutClick}>
                                All
                        </a>
                        <hr className="dropdown-divider" />
                        {Object.keys(items).map(key => (
                            <a
                                href="/"
                                className={this.props.active === key ? "dropdown-item is-active" : "dropdown-item"}
                                key={key}
                                name={key}
                                title={this.props.title}
                                onClick={this.handleHomeAndAboutClick}
                            >
                                {items[key]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

Dropdown.propTypes = {
    title: PropTypes.string,
    items: PropTypes.object,
    active: PropTypes.string,
    onItemChange: PropTypes.func
};

export default Dropdown;
