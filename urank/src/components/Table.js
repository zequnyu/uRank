import React from 'react';
import PropTypes from 'prop-types';

import 'bulma/css/bulma.min.css'
import '../styles/Table.css'

function Table(props) {
    let rankSelection;
    if (props.ranking === 'all' && props.year === 'all') {
        rankSelection = 'ave';
    } else if (props.ranking === 'all') {
        rankSelection = 'ave' + props.year;
    } else if (props.year === 'all') {
        rankSelection = props.ranking + 'ave';
    } else {
        rankSelection = props.ranking + props.year;
    }

    let startIndex =  props.perpage * (props.index-1);
    let data = props.data
        .sort((a, b) => {
            if (a[rankSelection] === -1 || b[rankSelection] === -1){
                return b[rankSelection] - a[rankSelection]
            } else {
                return a[rankSelection] - b[rankSelection]
            }
        })
        .slice(startIndex, startIndex + props.perpage);

    return (
        <table className="table is-hoverable">
            <thead>
            <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Rank</th>
                <th className="is-hidden-mobile">Region</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={item.id}>
                    <td>{index+startIndex+1}</td>
                    <td>{item.name}</td>
                    <td>{item[rankSelection] === -1 ? 'NA' : item[rankSelection]}</td>
                    <td className="is-hidden-mobile">{item.region}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    data: PropTypes.array,
    year: PropTypes.string,
    ranking: PropTypes.string,
    index: PropTypes.number,
    perpage: PropTypes.number
};

export default Table;
