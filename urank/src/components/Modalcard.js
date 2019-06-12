import React from 'react';
import PropTypes from 'prop-types';

class Modalcard extends React.Component {
    constructor(props) {
        super(props);
        this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
    }

    handleBackgroundClick(event) {
        this.props.onModalClose(event);
    }

    render() {
        console.log(this.props.data);

        return(
            <div className="modal is-active">
                <div className="modal-background" onClick={this.props.onModalClose}/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <div className="modal-card-title">
                            <div className="level">
                                <div className="level-item has-text-centered">
                                    <span className="icon">
                                        <i className="fas fa-chart-area" />
                                    </span>
                                    <span>Trending</span>
                                </div>
                            </div>
                        </div>
                        <button className="delete" aria-label="close" onClick={this.props.onModalClose}/>
                    </header>
                    <section className="modal-card-body">
                        HAHAHA
                    </section>
                </div>
            </div>
        );
    }
}

Modalcard.propTypes = {
    data: PropTypes.object,
    onModalClose: PropTypes.func
};

export default Modalcard;
