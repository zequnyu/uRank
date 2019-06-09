import React from 'react';

import 'bulma/css/bulma.min.css'
import './Table.css'


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        let url = "https://gist.githubusercontent.com/zequnyu/1711418431c3a017436e19229214f0bb/raw/" +
            "a6e95211962cb175f67ac98d666ad7bde08b8ecc/urank.json";
        fetch(url)
            .then(response => response.json())
            .then((json => this.setState({data: json})))
    }

    render() {
        let data = this.state.data;

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
                            <td>{0}</td>
                            <td>{item.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;
