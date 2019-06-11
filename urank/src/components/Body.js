import React from 'react';
import PropTypes from 'prop-types';

import Table from './Table'
import Dropdown from './Dropdown'
import Header from './Header'

import rawData from '../static/urank.json'

import 'bulma/css/bulma.min.css'
import '../styles/Body.css'


class Body extends React.Component {
    constructor(props) {
        super(props);

        this.dataWithAve = Array.from(rawData);
        this.initialiseData();

        this.state = {
            ranking: 'all',
            year: 'all',
            pageindex: 1,
            pagetotal: 1,
            perpage: 'all',
        };
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
        this.handlePageIndexIncrease = this.handlePageIndexIncrease.bind(this);
        this.handlePageIndexDecrease = this.handlePageIndexDecrease.bind(this);
    }

    static roundToTwo(num) {
        return Math.round(num * 100) / 100;
    }

    initialiseData() {
        for (let i=0; i<rawData.length; i++) {
            this.dataWithAve[i]['qsave'] = this.selectDataByTypeFromItem(i, 'qs');
            this.dataWithAve[i]['usnewsave'] = this.selectDataByTypeFromItem(i, 'usnews');
            this.dataWithAve[i]['timesave'] = this.selectDataByTypeFromItem(i, 'times');
            this.dataWithAve[i]['arwuave'] = this.selectDataByTypeFromItem(i, 'arwu');

            this.dataWithAve[i]['ave2019'] = this.selectDataByTypeFromItem(i, '2019');
            this.dataWithAve[i]['ave2018'] = this.selectDataByTypeFromItem(i, '2018');
            this.dataWithAve[i]['ave2017'] = this.selectDataByTypeFromItem(i, '2017');
            this.dataWithAve[i]['ave2016'] = this.selectDataByTypeFromItem(i, '2016');
            this.dataWithAve[i]['ave2015'] = this.selectDataByTypeFromItem(i, '2015');

            let allAve = [
                this.dataWithAve[i]['qsave'],
                this.dataWithAve[i]['usnewsave'],
                this.dataWithAve[i]['timesave'],
                this.dataWithAve[i]['arwuave']].filter(item => item > 0);

            if (allAve.length === 0) {
                this.dataWithAve[i]['ave'] = -1
            } else {
                this.dataWithAve[i]['ave'] = Body.roundToTwo(
                    allAve.reduce((t, c) => t + c, 0)*1.0/allAve.length);
            }
        }
    }

    selectDataByTypeFromItem(index, rank) {
        let result = Object.keys(rawData[index])
            .filter(key => key.includes(rank)).reduce((obj, key) => {
                obj.push(rawData[index][key]);
                return obj
            }, []).filter(item => item > 0);

        if (result.length === 0) {
            return -1
        } else {
            return Body.roundToTwo(
                result.reduce((t, c) => t + c, 0)*1.0/result.length);
        }
    }

    handleDropDownChange(event) {
        if (event.target.title === 'Ranking') {
            this.setState({ranking: event.target.name});
        } else if (event.target.title === 'Year') {
            this.setState({year: event.target.name});
        } else {
            this.setState({perpage: event.target.name});

            if (event.target.name === '50') {
                this.setState({pagetotal: Math.ceil(this.dataAfterFilter.length / 50)});
            } else if (event.target.name === '25') {
                this.setState({pagetotal: Math.ceil(this.dataAfterFilter.length / 25)});
            } else {
                this.setState({pagetotal: 1});
            }
        }
        this.setState({pageindex: 1});
    }

    handlePageIndexIncrease(event) {
        event.preventDefault();
        let index = this.state.pageindex;

        if (index < this.state.pagetotal) {
            this.setState({pageindex: index + 1});
        }
    }

    handlePageIndexDecrease(event) {
        event.preventDefault();
        let index = this.state.pageindex;

        if (index > 1) {
            this.setState({pageindex: index - 1});
        }
    }

    render() {
        let itemPerPage;

        this.dataAfterFilter = this.dataWithAve.filter(
            item => item.name.toLowerCase().includes(this.props.search.toLowerCase()));

        if (this.state.perpage === '50') {
            itemPerPage = 50;
        } else if (this.state.perpage === '25') {
            itemPerPage = 25;
        } else {
            itemPerPage = this.dataAfterFilter.length;
        }

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
                                <div className="level-right is-hidden-mobile">
                                    <div className="level-item">
                                        {this.state.pageindex > 1 ?
                                            <button
                                                className="button is-light"
                                                onClick={this.handlePageIndexDecrease}
                                            >&lt;
                                            </button> :
                                            <button className="button is-light" disabled>&lt;</button>
                                        }
                                        <span>{this.state.pageindex} / {this.state.pagetotal}</span>
                                        {this.state.pageindex < this.state.pagetotal ?
                                            <button
                                                className="button is-light"
                                                onClick={this.handlePageIndexIncrease}
                                            >&gt;
                                            </button> :
                                            <button className="button is-light" disabled>&gt;</button>
                                        }
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
                <section className="section" id="table-section">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <Table
                                data={this.dataAfterFilter}
                                year={this.state.year}
                                ranking={this.state.ranking}
                                index={this.state.pageindex}
                                perpage={itemPerPage}
                            />
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
