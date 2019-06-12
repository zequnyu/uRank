import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import { c1, c1bg, c2, c2bg, c3, c3bg, c4, c4bg, c5, c5bg } from '../colors'


class Modalcard extends React.Component {
    constructor(props) {
        super(props);
        this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
        this.state = {
            selectedYears: ['2019', '2018', '2017', '2016', '2015']
        };

        this.updateSelectedYears = this.updateSelectedYears.bind(this);
    }

    handleBackgroundClick(event) {
        this.props.onModalClose(event);
    }

    updateSelectedYears(e, legendItem) {
        var index = legendItem.datasetIndex;
        var ci = this.radarChart.chart;
        var meta = ci.getDatasetMeta(index);

        // See controller.isDatasetVisible comment
        meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;

        // We hid a dataset ... rerender the chart
        ci.update();

        let newState = this.state.selectedYears.slice();
        if (newState.includes(legendItem.text)) {
            newState = newState.filter(x => x !== legendItem.text);
        } else {
            newState.push(legendItem.text)
        }

        this.setState({ selectedYears:newState });
    }

    componentDidMount() {
        let d = this.props.data;
        let aveArray = [d.ave2015, d.ave2016, d.ave2017, d.ave2018, d.ave2019],
            qsAveArray = [d.qs2015, d.qs2016, d.qs2017, d.qs2018, d.qs2019],
            usnewsAveArray = [d.usnews2015, d.usnews2016, d.usnews2017, d.usnews2018, d.usnews2019],
            timesAveArray = [d.times2015, d.times2016, d.times2017, d.times2018, d.times2019],
            arwuAveArray = [d.arwu2015, d.arwu2016, d.arwu2017, d.arwu2018, d.arwu2019];
        new Chart(this.lineNode, {
            type: 'line',
            data: {
                labels: ["2015", "2016", "2017", "2018", "2019"],
                datasets: [
                    {data: aveArray, label: "Average", borderColor: c1, fill: false},
                    {data: qsAveArray, label: "QS", borderColor: c2, fill: false},
                    {data: usnewsAveArray, label: "US News", borderColor: c3, fill: false},
                    {data: timesAveArray, label: "Times", borderColor: c4, fill: false},
                    {data: arwuAveArray, label: "ARWU", borderColor: c5, fill: false},
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Ranking Trend (2015 - 2019)"
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            reverse: true,
                        }
                    }]
                }
            }
        });

        let d2019Array = [d.ave2019, d.qs2019, d.usnews2019, d.times2019, d.arwu2019],
            d2018Array = [d.ave2018, d.qs2018, d.usnews2018, d.times2018, d.arwu2018],
            d2017Array = [d.ave2017, d.qs2017, d.usnews2017, d.times2017, d.arwu2017],
            d2016Array = [d.ave2016, d.qs2016, d.usnews2016, d.times2016, d.arwu2016],
            d2015Array = [d.ave2015, d.qs2015, d.usnews2015, d.times2015, d.arwu2015];
        this.radarChart = new Chart(this.radarNode, {
            type: 'radar',
            data: {
                labels: ["Average", "QS", "US News", "Times", "ARWU"],
                datasets: [
                    {data: d2019Array, label: "2019", borderColor: c1, backgroundColor: c1bg, fill: true},
                    {data: d2018Array, label: "2018", borderColor: c2, backgroundColor: c2bg, fill: true},
                    {data: d2017Array, label: "2017", borderColor: c3, backgroundColor: c3bg, fill: true},
                    {data: d2016Array, label: "2016", borderColor: c4, backgroundColor: c4bg, fill: true},
                    {data: d2015Array, label: "2015", borderColor: c5, backgroundColor: c5bg, fill: true},
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Yearly Ranking (2015 - 2019)"
                },
                scale: {
                    ticks: {
                        reverse: true,
                        beginAtZero: false,
                        min: 1,
                        max: Math.max.apply(Math, [].concat.apply([],
                            [d2019Array, d2018Array, d2017Array, d2016Array, d2015Array]))+30
                    }
                },
                legend: {
                    position: 'top',
                    onClick: this.updateSelectedYears
                }
            }
        });
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
                        <div className="has-text-centered">
                            <span className="is-size-5 has-text-weight-semibold">{this.props.data.name}</span>
                            <br />
                            <span className="icon">
                                <i className="fas fa-map-marker-alt" />
                            </span>
                            <span className="is-size-6">{this.props.data.region}</span>
                            <hr />
                        </div>
                        <div className="container">
                            <canvas ref={node => this.lineNode = node}/>
                            <hr />
                        </div>
                        <div className="container">
                            <canvas ref={node => this.radarNode = node}/>
                        </div>
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
