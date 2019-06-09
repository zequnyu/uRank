import React from 'react';
import PropTypes from 'prop-types';

import Table from './Table'

import 'bulma/css/bulma.min.css'

function Body(props) {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-three-quarters">
                    <Table search={props.search} />
                </div>
            </div>
        </section>
    );
}

Body.propTypes = {
    search: PropTypes.string
};

export default Body;
