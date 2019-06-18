import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown'
import Header from './Header'
import Modalcard from './Modalcard'
import Table from './Table'

import rawData from '../static/urank.json'

import 'bulma/css/bulma.min.css'
import '../styles/Body.css'


class Body extends React.Component {
    constructor(props) {
        super(props);

        this.dataWithAve = Array.from(rawData);
        this.initialiseData();

        this.dataAfterFilter = this.dataWithAve.filter(
            item => (
                item.name.toLowerCase().includes(this.props.search.toLowerCase()) ||
                item.region.toLowerCase().includes(this.props.search.toLowerCase())
            )
        );

        this.state = {
            ranking: 'all',
            year: 'all',
            pageIndex: 1,
            pageTotal: Math.ceil(this.dataAfterFilter.length / 25),
            perPage: '25',
            activeModal: ''
        };
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
        this.handlePageIndexIncrease = this.handlePageIndexIncrease.bind(this);
        this.handlePageIndexDecrease = this.handlePageIndexDecrease.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
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
            this.setState({perPage: event.target.name});

            if (event.target.name === '50') {
                this.setState({pageTotal: Math.ceil(this.dataAfterFilter.length / 50)});
            } else if (event.target.name === '25') {
                this.setState({pageTotal: Math.ceil(this.dataAfterFilter.length / 25)});
            } else {
                this.setState({pageTotal: 1});
            }
        }
        this.setState({pageIndex: 1});
    }

    handlePageIndexIncrease(event) {
        event.preventDefault();
        let index = this.state.pageIndex;

        if (index < this.state.pageTotal) {
            this.setState({pageIndex: index + 1});
        }
    }

    handlePageIndexDecrease(event) {
        event.preventDefault();
        let index = this.state.pageIndex;

        if (index > 1) {
            this.setState({pageIndex: index - 1});
        }
    }

    handleModalOpen(event) {
        this.setState({activeModal: event.currentTarget.id});
    }

    handleModalClose(event) {
        this.setState({activeModal: ''});
    }

    render() {
        let itemPerPage, modalData;

        if (this.state.perPage === '50') {
            itemPerPage = 50;
        } else if (this.state.perPage === '25') {
            itemPerPage = 25;
        } else {
            itemPerPage = this.dataAfterFilter.length;
        }

        // Set single item data pass to modal
        // Return `undefined` when no modal is active
        modalData = this.dataAfterFilter.find(x => x.id.toString() === this.state.activeModal);

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
                                        {this.state.pageIndex > 1 ?
                                            <button
                                                className="button is-light"
                                                onClick={this.handlePageIndexDecrease}
                                            >&lt;
                                            </button> :
                                            <button className="button is-light" disabled>&lt;</button>
                                        }
                                        <span>{this.state.pageIndex} / {this.state.pageTotal}</span>
                                        {this.state.pageIndex < this.state.pageTotal ?
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
                                            active={this.state.perPage}
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
                                index={this.state.pageIndex}
                                perPage={itemPerPage}
                                onModalOpen={this.handleModalOpen}
                            />
                        </div>
                    </div>
                </section>
                <section className="section">
                    {this.state.activeModal === '' ? null :
                        <Modalcard
                            data={modalData}
                            onModalClose={this.handleModalClose}
                        />
                    }
                </section>
            </div>
        );
    }
}

Body.propTypes = {
    search: PropTypes.string
};

export default Body;
