import React from 'react';

import Table from './Table'

import 'bulma/css/bulma.min.css'

function Body(props) {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-three-quarters">
                    <Table/>
                </div>
            </div>
        </section>
    );
}

Body.prototype = {};

export default Body;
