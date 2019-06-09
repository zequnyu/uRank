import React from 'react';
import PropTypes from 'prop-types';

import rawData from '../static/urank.json'

import 'bulma/css/bulma.min.css'
import './Table.css'


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.dataWithAve = Array.from(rawData);
        this.initialiseData();
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
            }
            else {
                this.dataWithAve[i]['ave'] = Table.roundToTwo(
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
        }
        else {
            return Table.roundToTwo(
                result.reduce((t, c) => t + c, 0)*1.0/result.length);
        }
    }

    render() {
        let filter = this.props.search;
        let data = this.dataWithAve.filter(item => item.name.toLowerCase().includes(filter));

        return (
            <table className="table is-hoverable">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.ave}</td>
                            <td>{item.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    search: PropTypes.string
};

export default Table;
