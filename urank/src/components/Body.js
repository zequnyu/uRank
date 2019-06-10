import React from 'react';
import PropTypes from 'prop-types';

import Table from './Table'
import Dropdown from './Dropdown'
import Header from './Header'

import 'bulma/css/bulma.min.css'
import '../styles/Body.css'


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ranking: 'all',
            year: 'all',
            pageindex: 1,
            perpage: 'all',
        };
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
    }

    handleDropDownChange(event) {
        if (event.target.title === 'Ranking') {
            this.setState({ranking: event.target.name});
        } else if (event.target.title === 'Year') {
            this.setState({year: event.target.name});
        } else {
            this.setState({perpage: event.target.name});
        }
    }

    render() {
        return (
            <div>
                <Header ranking={this.state.ranking} year={this.state.year} />
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-half-desktop is-three-quarters-tablet is-full-mobile">
                            <div className="level is-mobile">
                                <div className="level-left">
                                    <div className="level-item">
                                        <Dropdown
                                            title="Ranking"
                                            items={{
                                                'qs': 'QS',
                                                'usnews': 'US News',
                                                'times': 'Times',
                                                'arwu': 'ARWU'
                                            }}
                                            active={this.state.ranking}
                                            onItemChange={this.handleDropDownChange}
                                        />
                                    </div>
                                    <div className="level-item">
                                        <Dropdown
                                            title="Year"
                                            items={{
                                                '2019': '2019',
                                                '2018': '2018',
                                                '2017': '2017',
                                                '2016': '2016',
                                                '2015': '2015'
                                            }}
                                            active={this.state.year}
                                            onItemChange={this.handleDropDownChange}
                                        />
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <button className="button is-light">&lt;</button>
                                        <span>1 / 7</span>
                                        <button className="button is-light">&gt;</button>
                                    </div>
                                    <div className="level-item">
                                        <Dropdown
                                            title="Result per page"
                                            items={{
                                                '50': '50',
                                                '25': '25'
                                            }}
                                            active={this.state.perpage}
                                            onItemChange={this.handleDropDownChange}
                                        />
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
