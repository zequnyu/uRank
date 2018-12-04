import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import Select from 'react-select'
import Chart from 'chart.js';
import {withRouter} from 'next/router'

import logo from '../static/harward.png'


const TrendingPage = styled.div`
    min-width: 1000px;
    margin-top: 50px;
    display: grid;
    grid-template-rows: repeat(9, minmax(100px, 1fr));
    grid-template-columns: repeat(4, 1fr);
`;

const SelectArea = styled.div`
    grid-row: 1;
    grid-column: 1/5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const SelectDropDown = styled(Select)`
    font-family: 'Open Sans', sans-serif;
    flex: 0 0 60%;
`;


// ---- Analysis Area ----

const AnalysisArea = styled.div`
    grid-row: 2/10;
    grid-column: 1/4;
    display: flex;
    flex-flow: column nowrap;
`;

const AnalysisUp = styled.div`
    flex: 1;
    padding: 30px;
    display: flex;
    align-items: center;
`;

const LineChartCanvas = styled.canvas`
`;

const RadarChartCanvas = styled.canvas`
`;

const AnalysisDown = styled.div`
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    
`;

const AnalysisDownLeft = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
`;

const AnalysisDownRight = styled.div`
    flex: 1;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 12px;
    color: #666;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: end;
`;

const AnalysisDownRightTitle = styled.span`
    font-weight: bold;
    margin-right: 20px;
`;

const AnalysisDownRightLabel = styled.span`
    margin-right: 100px;
    margin-top: 32px;
    font-size: 10px;
`;

const AnalysisDownRightNum = styled.span`
    font-size: 14px;
`;

// ---- Dashboard Area ----

const DashboardArea = styled.div`
    grid-row: 2/10;
    grid-column: 4;
    display: flex;
    flex-flow: column nowrap;
`;

const DashboardUp = styled.div`
    flex: 0 0 250px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:center;
`;

const DashboardLogo = styled.div`
    background: linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) ), url(${logo}) no-repeat;
    background-size: 100%;
    color: white;    
    border-radius: 50%;
    width: 150px;
    height: 150px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: 'Pacifico', cursive;
    font-size: 3em;
`;

const NumberSign = styled.span`
    font-size: 0.6em;
`;

const DashboardLabel = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const DashboardLabelName = styled.div`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    color: #2A3132;
`;

const DashboardLocationIcon = styled.i`
    color: #763626;
`;

const DashboardLabelRegion = styled.div`
    text-align: center;
    font-family: 'Open Sans', sans-serif;
`;

const DashboardDown = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const DashboardButton= styled.button`
    flex: 1 1 0;
    margin: 10px;
    padding-left: 20px;
    
    border: 0;
    outline:0;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    color: #2A3132;
    background-color: #e6e6e6;
    &:hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }
    text-align: start;
    
    width: 70%;
`;


class Analysis extends React.Component {
    constructor(props) {
        super(props);
        this.initialiseItemAve();

        //console.log(this.itemWithAve);
        this.state = {
            selectedYears: ['2019', '2018', '2017', '2016', '2015']
        };

        this.updateSelectedYears = this.updateSelectedYears.bind(this);
    }

    initialiseItemAve() {
        this.itemWithAve = Object.assign({}, this.props.item);

        this.itemWithAve['qsave'] = this.selectDataByTypeFromItem('qs');
        this.itemWithAve['usnewsave'] = this.selectDataByTypeFromItem('usnews');
        this.itemWithAve['timesave'] = this.selectDataByTypeFromItem('times');
        this.itemWithAve['arwuave'] = this.selectDataByTypeFromItem('arwu');

        this.itemWithAve['ave2019'] = this.selectDataByTypeFromItem('2019');
        this.itemWithAve['ave2018'] = this.selectDataByTypeFromItem('2018');
        this.itemWithAve['ave2017'] = this.selectDataByTypeFromItem('2017');
        this.itemWithAve['ave2016'] = this.selectDataByTypeFromItem('2016');
        this.itemWithAve['ave2015'] = this.selectDataByTypeFromItem('2015');

        let allAve = [
            this.itemWithAve['qsave'],
            this.itemWithAve['usnewsave'],
            this.itemWithAve['timesave'],
            this.itemWithAve['arwuave']
        ].filter(item => item > 0);

        this.itemWithAve['ave'] = (allAve.length === 0) ? -1 : Analysis.roundToTwo(allAve.reduce((t, c) => t + c, 0)*1.0 / allAve.length);
    }

    selectDataByTypeFromItem(rank) {
        let partDataArray = Object.keys(this.props.item).filter(key => key.includes(rank)).reduce((obj, key) => {
            obj.push(this.props.item[key]);
            return obj
        }, []).filter(item => item > 0);

        return (partDataArray.length === 0) ? -1 : Analysis.roundToTwo(partDataArray.reduce((t, c) => t + c, 0)*1.0/partDataArray.length)
    }

    static roundToTwo(num) {
        return Math.round(num * 100) / 100;
    }

    componentDidMount() {
        let d = this.itemWithAve;
        let lineChart = new Chart(this.lineNode, {
            type: 'line',
            data: {
                labels: ["2015", "2016", "2017", "2018", "2019"],
                datasets: [{
                    data: [d.ave2015, d.ave2016, d.ave2017, d.ave2018, d.ave2019],
                    label: "Average",
                    borderColor: "#4d648d",
                    fill: false
                }, {
                    data: [d.qs2015, d.qs2016, d.qs2017, d.qs2018, d.qs2019],
                    label: "QS",
                    borderColor: "#f4cc70",
                    fill: false
                }, {
                    data: [d.usnews2015, d.usnews2016, d.usnews2017, d.usnews2018, d.usnews2019],
                    label: "US News",
                    borderColor: "#de7a22",
                    fill: false
                }, {
                    data: [d.times2015, d.times2016, d.times2017, d.times2018, d.times2019],
                    label: "Times",
                    borderColor: "#f6abb6",
                    fill: false
                }, {
                    data: [d.arwu2015, d.arwu2016, d.arwu2017, d.arwu2018, d.arwu2019],
                    label: "ARWU",
                    borderColor: "#6ab187",
                    fill: false
                }]
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

        let d2019 = [d.ave2019, d.qs2019, d.usnews2019, d.times2019, d.arwu2019];
        let d2018 = [d.ave2018, d.qs2018, d.usnews2018, d.times2018, d.arwu2018];
        let d2017 = [d.ave2017, d.qs2017, d.usnews2017, d.times2017, d.arwu2017];
        let d2016 = [d.ave2016, d.qs2016, d.usnews2016, d.times2016, d.arwu2016];
        let d2015 = [d.ave2015, d.qs2015, d.usnews2015, d.times2015, d.arwu2015];


        this.radarChart = new Chart(this.radarNode, {
            type: 'radar',
            data: {
                labels: ["Average", "QS", "US News", "Times", "ARWU"],
                datasets: [{
                    label: "2019",
                    fill: true,
                    backgroundColor: "rgba(77, 100, 141, 0.2)",
                    borderColor: "rgba(77, 100, 141, 1)",
                    data: d2019
                }, {
                    label: "2018",
                    fill: true,
                    backgroundColor: "rgba(244, 204, 112, 0.2)",
                    borderColor: "rgba(244, 204, 112, 1)",
                    data: d2018
                }, {
                    label: "2017",
                    fill: true,
                    backgroundColor: "rgba(222, 122, 34, 0.2)",
                    borderColor: "rgba(222, 122, 34, 1)",
                    data: d2017
                }, {
                    label: "2016",
                    fill: true,
                    backgroundColor: "rgba(246, 171, 182, 0.2)",
                    borderColor: "rgba(246, 171, 182, 1)",
                    data: d2016
                }, {
                    label: "2015",
                    fill: true,
                    backgroundColor: "rgba(106, 177, 135, 0.2)",
                    borderColor: "rgba(106, 177, 135, 1)",
                    data: d2015
                }]
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
                        max: Math.max.apply(Math, [].concat.apply([], [d2019, d2018, d2017, d2016, d2015]))+30
                    }
                },
                legend: {
                    position: 'left',
                    onClick: this.updateSelectedYears
                }
            }
        });
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

    calculateSeletedYearsLabel() {
        let years = this.state.selectedYears;

        let selectedAve = (years.length === 0) ? 0 : years.map(element => "ave" + element).reduce((total, key) => {
            return total + this.itemWithAve[key];
        }, 0) / years.length;

        let selectedQS = (years.length === 0) ? 0 : years.map(element => "qs" + element).reduce((total, key) => {
            return total + this.itemWithAve[key];
        }, 0) / years.length;

        let selectedUSNews = (years.length === 0) ? 0 : years.map(element => "usnews" + element).reduce((total, key) => {
            return total + this.itemWithAve[key];
        }, 0) / years.length;

        let selectedTimes = (years.length === 0) ? 0 : years.map(element => "times" + element).reduce((total, key) => {
            return total + this.itemWithAve[key];
        }, 0) / years.length;

        let selectedARWU = (years.length === 0) ? 0 : years.map(element => "arwu" + element).reduce((total, key) => {
            return total + this.itemWithAve[key];
        }, 0) / years.length;


        return [
            Analysis.roundToTwo(selectedAve),
            Analysis.roundToTwo(selectedQS),
            Analysis.roundToTwo(selectedUSNews),
            Analysis.roundToTwo(selectedTimes),
            Analysis.roundToTwo(selectedARWU),
        ];
    }

    render() {

        let labels = this.calculateSeletedYearsLabel();

        return (
            <Layout>
                <TrendingPage>
                    <SelectArea>
                        <SelectDropDown
                            value={{value: this.itemWithAve.id, label: this.itemWithAve.name}}
                            options={this.props.options}
                            instanceId="mydropdown"
                            placeholder="Select University..."
                            onChange={(e)=>{
                                window.location = '/analysis/'+e.value
                            }}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: '20px',
                                colors: {
                                    ...theme.colors,
                                    primary25: '#f2f2f2',
                                    primary: '#e6e6e6',
                                },
                            })}
                        />
                    </SelectArea>
                    <AnalysisArea>
                        <AnalysisUp>
                            <LineChartCanvas
                                ref={node => (this.lineNode = node)}
                            />
                        </AnalysisUp>
                        <AnalysisDown>
                            <AnalysisDownLeft>
                                <RadarChartCanvas ref={node => this.radarNode = node}/>
                            </AnalysisDownLeft>
                            <AnalysisDownRight>
                                <AnalysisDownRightTitle>Selected Years Ave Ranking</AnalysisDownRightTitle>
                                <AnalysisDownRightLabel>
                                    Ave <AnalysisDownRightNum>{labels[0]}</AnalysisDownRightNum>
                                </AnalysisDownRightLabel>
                                <AnalysisDownRightLabel>
                                    QS <AnalysisDownRightNum>{labels[1]}</AnalysisDownRightNum>
                                </AnalysisDownRightLabel>
                                <AnalysisDownRightLabel>
                                    US News <AnalysisDownRightNum>{labels[2]}</AnalysisDownRightNum>
                                </AnalysisDownRightLabel>
                                <AnalysisDownRightLabel>
                                    Times <AnalysisDownRightNum>{labels[3]}</AnalysisDownRightNum>
                                </AnalysisDownRightLabel>
                                <AnalysisDownRightLabel>
                                    ARWU <AnalysisDownRightNum>{labels[4]}</AnalysisDownRightNum>
                                </AnalysisDownRightLabel>
                            </AnalysisDownRight>
                        </AnalysisDown>
                    </AnalysisArea>
                    <DashboardArea>
                        <DashboardUp>
                            <DashboardLogo><NumberSign>#</NumberSign>{this.itemWithAve.ave}</DashboardLogo>
                            <DashboardLabel>
                                <DashboardLabelName>{this.itemWithAve.name}</DashboardLabelName>
                                <DashboardLabelRegion>
                                    <DashboardLocationIcon className="fas fa-map-marker-alt" /> {this.itemWithAve.region}
                                </DashboardLabelRegion>
                            </DashboardLabel>
                        </DashboardUp>
                        <DashboardDown>
                            <DashboardButton><i className="fas fa-university" /> Website</DashboardButton>
                            <DashboardButton><i className="fas fa-angle-right" /> Wiki</DashboardButton>
                            <DashboardButton><i className="fas fa-angle-right" /> QS</DashboardButton>
                            <DashboardButton><i className="fas fa-angle-right" /> US News</DashboardButton>
                            <DashboardButton><i className="fas fa-angle-right" /> Times</DashboardButton>
                            <DashboardButton><i className="fas fa-angle-right" /> ARWU</DashboardButton>
                        </DashboardDown>
                    </DashboardArea>
                </TrendingPage>
            </Layout>
        );
    }
}

Analysis.getInitialProps = async function(context) {
    const id = context.query.id;
    const inputData = await import('../static/data.json');

    let selectOptions = inputData.default.reduce((obj, key) => {
        obj.push({value: key['id'], label: key['name']});
        return obj
    }, []);

    return {
        options: selectOptions,
        item: inputData.default.find(x => x.id === Number(id))
    }
};

export default withRouter(Analysis);
