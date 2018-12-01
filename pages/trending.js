import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import Select from 'react-select'
import logo from '../static/harward.png'


const TrendingPage = styled.div`
    margin-top: 30px;
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
`;

const SelectDropDown = styled(Select)`
    font-family: 'Open Sans', sans-serif;
    flex: 0 0 50%;
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
    background-color: aqua;
    flex: 1;
`;

const AnalysisDown = styled.div`
    background-color: cornflowerblue;
    flex: 1;
`;

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
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

const DashboardButton= styled.button`
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
    
    height: 80px;
    width: 180px;
`;



export default () => (
    <Layout>
        <TrendingPage>
            <SelectArea>
                <SelectDropDown
                    options={selectOptions}
                    instanceId="mydropdown"
                />
            </SelectArea>
            <AnalysisArea>
                <AnalysisUp>Analysis 1</AnalysisUp>
                <AnalysisDown>Analysis 2</AnalysisDown>
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
)