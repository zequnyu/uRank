import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import Select from 'react-select'
import Chart from 'chart.js';

import logo from '../static/harward.png'


const TrendingPage = styled.div`
    min-width: 550px;
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
    flex: 0 0 75%;
`;

const selectOptions = [
    { value: '10001', label: 'Harvard University' },
];


// ---- Analysis Area ----

const AnalysisArea = styled.div`
    grid-row: 2/10;
    grid-column: 1/4;
    display: flex;
    flex-flow: column nowrap;
`;

const AnalysisUp = styled.div`
    flex: 1;
    padding: 15px;
    //background-color: azure;
`;

const LineChartCanvas = styled.canvas`
    width: 100%;
`;

const RadarChartCanvas = styled.canvas`
    width: 100%;
`;

const AnalysisDown = styled.div`
    flex: 1;
    padding: 15px;
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
    background: url(${logo}) no-repeat;
    background-size: 100%;
    color: transparent;    
    border-radius: 50%;
    width: 150px;
    height: 150px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: 'Pacifico', cursive;
    font-size: 2.5em;
    
    &:hover {
        color: #2A3132;
        background-image: none;
    }
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
    text-align: center;
    
    
    width: 70%;
`;


class Trending extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let lineChart = new Chart(this.lineNode, {
            type: 'line',
            data: {
                labels: ["2015", "2016", "2017", "2018", "2019"],
                datasets: [{
                    data: [3,3,2,1,5],
                    label: "Average",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: [1,1,1,1,1],
                    label: "QS",
                    borderColor: "#8e5ea2",
                    fill: false
                }]
            }
        });

        let radarChart = new Chart(this.radarNode, {
            type: 'radar',
            data: {
                labels: ["Average", "QS", "US News", "Times", "ARWU"],
                datasets: [{
                    label: "2017",
                    fill: true,
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    data: [8.77,55.61,21.69,6.62,6.82]
                }, {
                    label: "2018",
                    fill: true,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    data: [25.48,54.16,7.61,8.06,4.45]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Distribution in % of world population'
                }
            }
        });
    }

    render() {
        return (
            <Layout>
                <TrendingPage>
                    <SelectArea>
                        <SelectDropDown
                            options={selectOptions}
                            instanceId="mydropdown"
                        />
                    </SelectArea>
                    <AnalysisArea>
                        <AnalysisUp>
                            <LineChartCanvas ref={node => (this.lineNode = node)}/>
                        </AnalysisUp>
                        <AnalysisDown>
                            <RadarChartCanvas ref={node => this.radarNode = node}/>
                        </AnalysisDown>
                    </AnalysisArea>
                    <DashboardArea>
                        <DashboardUp>
                            <DashboardLogo>#2.55</DashboardLogo>
                            <DashboardLabel>
                                <DashboardLabelName>Harward University</DashboardLabelName>
                                <DashboardLabelRegion>
                                    <DashboardLocationIcon className="fas fa-map-marker-alt" /> United States
                                </DashboardLabelRegion>
                            </DashboardLabel>
                        </DashboardUp>
                        <DashboardDown>
                            <DashboardButton>Official Website</DashboardButton>
                            <DashboardButton>Wiki</DashboardButton>
                            <DashboardButton>QS Analysis</DashboardButton>
                            <DashboardButton>US News Analysis</DashboardButton>
                            <DashboardButton>Times Analysis</DashboardButton>
                            <DashboardButton>ARWU Analysis</DashboardButton>
                        </DashboardDown>
                    </DashboardArea>
                </TrendingPage>
            </Layout>
        );
    }
}


export default Trending;
