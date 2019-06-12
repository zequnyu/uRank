import React from 'react';
import PropTypes from 'prop-types';

import 'bulma/css/bulma.min.css'
import '../styles/Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(event) {
        this.props.onModalOpen(event);
    }

    render() {
        let rankSelection;
        if (this.props.ranking === 'all' && this.props.year === 'all') {
            rankSelection = 'ave';
        } else if (this.props.ranking === 'all') {
            rankSelection = 'ave' + this.props.year;
        } else if (this.props.year === 'all') {
            rankSelection = this.props.ranking + 'ave';
        } else {
            rankSelection = this.props.ranking + this.props.year;
        }

        let startIndex =  this.props.perPage * (this.props.index-1);
        let data = this.props.data
            .sort((a, b) => {
                if (a[rankSelection] === -1 || b[rankSelection] === -1){
                    return b[rankSelection] - a[rankSelection]
                } else {
                    return a[rankSelection] - b[rankSelection]
                }
            })
            .slice(startIndex, startIndex + this.props.perPage);

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
                    <tr className="clickable-tr" key={item.id} id={item.id.toString()} onClick={this.handleItemClick}>
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
}

Table.propTypes = {
    data: PropTypes.array,
    year: PropTypes.string,
    ranking: PropTypes.string,
    index: PropTypes.number,
    perPage: PropTypes.number,
    onModalOpen: PropTypes.func
};

export default Table;
