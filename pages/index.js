import styled from 'styled-components'
import Layout from '../components/MyLayout.js'
import inputData from '../static/data.json'
import ReactModal from 'react-modal';


const SelectionMenu = styled.div`
    margin-top: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: stretch;
`;

const SelectionMenuLeft = styled.div`
    flex: 3;
    padding: 10px;
    display: flex;
    justify-content: center;
`;

const OptionButtonBasis = styled.button`
    border: 0;
    outline:0;
    border-radius: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    color: #2A3132;
    background-color: #e6e6e6;
    &:hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }
    text-align: center;
`;

const SelectModal = styled(OptionButtonBasis)`
    width: 80%;
`;

const OptionButton = styled(OptionButtonBasis)`
    height: 80px;
    width: 180px;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 10px;
`;

const SelectionMenuRight = styled.div`
    flex: 2;
    padding: 10px;
    display: flex;
    justify-content: center;
`;

const MenuButton = styled.button`
    margin-left: 20px;
    width: 45px;
    height: 45px;
    border: 0;
    outline:0;
    border-radius: 50%;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    
    color: #2A3132;
    background-color: #e6e6e6;
    text-align: center;
    &:hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }
    
`;

const MenuPageLabel = styled.span`
    color: #2A3132;
    margin-left: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
`;

const ModalStyles = {
    overlay: {
        backgroundColor: '#f2f2f2'
    },
    content: {
        border: 0,
    }
};

const ModalTable = styled.div`
    max-width: 1000px;
    margin: auto;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px 10px;
    

    #avelabel {
        grid-row: 1;
        grid-column: 2/4;
    }
    #ave {
        grid-row: 2;
        grid-column: 1;
    }
    #qsave {
        grid-row: 2;
        grid-column: 2;
    }
    #usnewsave {
        grid-row: 2;
        grid-column: 3;
    }
    #timesave {
        grid-row: 2;
        grid-column: 4;
    }
    #arwuave {
        grid-row: 2;
        grid-column: 5;
    }
    
    #qslabel {
        grid-row: 3;
        grid-column: 2/4;
    }
    #qs2019 {
        grid-row: 4;
        grid-column: 1;
    }
    #qs2018 {
        grid-row: 4;
        grid-column: 2;
    }
    #qs2017 {
        grid-row: 4;
        grid-column: 3;
    }
    #qs2016 {
        grid-row: 4;
        grid-column: 4;
    }
    #qs2015 {
        grid-row: 4;
        grid-column: 5;
    }
    
    #usnewslabel {
        grid-row: 5;
        grid-column: 2/4;
    }
    #usnews2019 {
        grid-row: 6;
        grid-column: 1;
    }
    #usnews2018 {
        grid-row: 6;
        grid-column: 2;
    }
    #usnews2017 {
        grid-row: 6;
        grid-column: 3;
    }
    #usnews2016 {
        grid-row: 6;
        grid-column: 4;
    }
    #usnews2015 {
        grid-row: 6;
        grid-column: 5;
    }
    
    #timeslabel {
        grid-row: 7;
        grid-column: 2/4;
    }
    #times2019 {
        grid-row: 8;
        grid-column: 1;
    }
    #times2018 {
        grid-row: 8;
        grid-column: 2;
    }
    #times2017 {
        grid-row: 8;
        grid-column: 3;
    }
    #times2016 {
        grid-row: 8;
        grid-column: 4;
    }
    #times2015 {
        grid-row: 8;
        grid-column: 5;
    }
    
    #arwulabel {
        grid-row: 9;
        grid-column: 2/4;
    }
    #arwu2019 {
        grid-row: 10;
        grid-column: 1;
    }
    #arwu2018 {
        grid-row: 10;
        grid-column: 2;
    }
    #arwu2017 {
        grid-row: 10;
        grid-column: 3;
    }
    #arwu2016 {
        grid-row: 10;
        grid-column: 4;
    }
    #arwu2015 {
        grid-row: 10;
        grid-column: 5;
    }
    
`;

const OptionLabel = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    color: #2A3132;
    border-bottom: 1px solid #336B87;
    width: 80%;
`;

const optionList = [
    { id: 'ave', label: 'Average'},
    { id: 'qsave', label: 'QS Average'},
    { id: 'usnewsave', label: 'US News Average'},
    { id: 'timesave', label: 'Times Average'},
    { id: 'arwuave', label: 'ARWU Average'},
    { id: 'qs2019', label: 'QS - 2019' },
    { id: 'qs2018', label: 'QS - 2018' },
    { id: 'qs2017', label: 'QS - 2017' },
    { id: 'qs2016', label: 'QS - 2016' },
    { id: 'qs2015', label: 'QS - 2015' },
    { id: 'usnews2019', label: 'US News - 2019' },
    { id: 'usnews2018', label: 'US News - 2018' },
    { id: 'usnews2017', label: 'US News - 2017' },
    { id: 'usnews2016', label: 'US News - 2016' },
    { id: 'usnews2015', label: 'US News - 2015' },
    { id: 'times2019', label: 'Times - 2019' },
    { id: 'times2018', label: 'Times - 2018' },
    { id: 'times2017', label: 'Times - 2017' },
    { id: 'times2016', label: 'Times - 2016' },
    { id: 'times2015', label: 'Times - 2015' },
    { id: 'arwu2019', label: 'ARWU - 2019' },
    { id: 'arwu2018', label: 'ARWU - 2018' },
    { id: 'arwu2017', label: 'ARWU - 2017' },
    { id: 'arwu2016', label: 'ARWU - 2016' },
    { id: 'arwu2015', label: 'ARWU - 2015' }
];

const BoldArrow = styled.span`
    font-weight: bold;
    color: #e6e6e6;
`;

class PoppedModalTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    handleOptionClick(e) {
        this.props.onOptionChange(e);
    }

    render() {
        return (
            <ModalTable>
                {optionList.map(item => (
                    <OptionButton onClick={this.handleOptionClick} key={item.id} id={item.id}>{item.label}</OptionButton>
                ))}
                <OptionLabel id="avelabel">Average <BoldArrow>↙</BoldArrow></OptionLabel>
                <OptionLabel id="qslabel">QS <BoldArrow>↙</BoldArrow></OptionLabel>
                <OptionLabel id="usnewslabel">US News <BoldArrow>↙</BoldArrow></OptionLabel>
                <OptionLabel id="timeslabel">Times <BoldArrow>↙</BoldArrow></OptionLabel>
                <OptionLabel id="arwulabel">ARWU <BoldArrow>↙</BoldArrow></OptionLabel>
            </ModalTable>
        )
    }
}


class MySelectionMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handlePageDecrease = this.handlePageDecrease.bind(this);
        this.handlePageIncrease = this.handlePageIncrease.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handlePageDecrease() {
        this.props.onPageNumberChange(this.props.pageNumber - 1);
    }
    handlePageIncrease() {
        this.props.onPageNumberChange(this.props.pageNumber + 1);
    }

    handleOpenModal() {
        this.props.onModalStateChange(true);
    }

    handleCloseModal(e) {
        this.props.onModalStateChange(false);
        this.props.onRankOptionChange(e.target.id);
    }


    render() {
        return <SelectionMenu>
            <SelectionMenuLeft>
                <SelectModal onClick={this.handleOpenModal}>{optionList.find(x => x.id === this.props.rankOption).label}</SelectModal>
                <ReactModal
                    isOpen={this.props.modalState}
                    contentLabel="uRank Menu"
                    ariaHideApp={false}
                    style={ModalStyles}
                >
                    <PoppedModalTable onOptionChange={this.handleCloseModal}/>
                </ReactModal>
            </SelectionMenuLeft>
            <SelectionMenuRight>
                <MenuButton onClick={this.handlePageDecrease}>&lt;</MenuButton>
                <MenuPageLabel>{this.props.pageNumber+1}/{this.props.pageTotal}</MenuPageLabel>
                <MenuButton onClick={this.handlePageIncrease}>&gt;</MenuButton>
            </SelectionMenuRight>
        </SelectionMenu>
    }
}


const Table = styled.table`
    margin: 20px auto;
    border-collapse: collapse;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
`;

const TableHeader = styled.th`
    background-color: #2A3132;
    color: white;
`;

const TableRow = styled.tr`
    color: #2A3132;
    text-align: left;
    &:nth-child(even) {
        background-color: #e6e6e6;
    }
    & > th, td {
        padding: 15px;
    }
    &:nth-child(n+2):hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }
`;

class TableContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let sortedData;
        let rankTd = this.props.rankOption;

        sortedData = myData.slice().sort(function (a, b) {
            return (a[rankTd] - b[rankTd]);
        }).filter(item => item[rankTd] > 0).slice(this.props.pageNumber*15, this.props.pageNumber*15+15);


        return <tbody>
        <TableRow>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Region</TableHeader>
        </TableRow>
        {sortedData.map(item => (
            <TableRow key={item.id}>
                <td>{item[rankTd]}</td>
                <td>{item.name}</td>
                <td>{item.region}</td>
            </TableRow>
        ))}
        </tbody>
    }
}

let myData = inputData.slice();

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rankOption: "ave",
            pageNumber: 0,
            showModal: false
        };
        this.handlePageNumberChange = this.handlePageNumberChange.bind(this);
        this.handleModalChange = this.handleModalChange.bind(this);
        this.handleRankOptionChange = this.handleRankOptionChange.bind(this);

        Index.initialiseMyData();

        this.pageTotal = (myData.length % 15 === 0) ? parseInt(myData.length / 15) : parseInt(myData.length / 15)+1;
    }

    static initialiseMyData() {
        for (let i=0; i<inputData.length; i++) {
            myData[i]['qsave'] = this.selectDataByRankTypeFromOneUniv(i, 'qs');
            myData[i]['usnewsave'] = this.selectDataByRankTypeFromOneUniv(i, 'usnews');
            myData[i]['timesave'] = this.selectDataByRankTypeFromOneUniv(i, 'times');
            myData[i]['arwuave'] = this.selectDataByRankTypeFromOneUniv(i, 'arwu');

            let allAve = [myData[i]['qsave'], myData[i]['usnewsave'], myData[i]['timesave'], myData[i]['arwuave']].filter(item => item > 0);
            //console.log(allAve);
            myData[i]['ave'] = (allAve.length === 0) ? -1 : this.roundToTwo(allAve.reduce((t, c) => t + c, 0)*1.0/allAve.length);
        }
    }

    static selectDataByRankTypeFromOneUniv(index, rank) {
        let partDataArray = Object.keys(inputData[index]).filter(key => key.includes(rank)).reduce((obj, key) => {
            obj.push(inputData[index][key]);
            return obj
        }, []).filter(item => item > 0);

        return (partDataArray.length === 0) ? -1 : this.roundToTwo(partDataArray.reduce((t, c) => t + c, 0)*1.0/partDataArray.length)
    }

    static roundToTwo(num) {
        return Math.round(num * 100) / 100;
    }

    handlePageNumberChange(newPageNumber) {
        if (newPageNumber < this.pageTotal && newPageNumber >= 0) {
            this.setState({pageNumber: newPageNumber});
        }

    }

    handleModalChange(newModalState) {
        this.setState({ showModal: newModalState });
    }

    handleRankOptionChange(newRankOption) {
        this.setState({ rankOption: newRankOption});
    }

    render() {
        return <Layout>
            <MySelectionMenu
                onModalStateChange={this.handleModalChange}
                modalState={this.state.showModal}
                onPageNumberChange={this.handlePageNumberChange}
                pageTotal = {this.pageTotal}
                pageNumber={this.state.pageNumber}
                onRankOptionChange={this.handleRankOptionChange}
                rankOption={this.state.rankOption}
            />
            <Table>
                <TableContent pageNumber={this.state.pageNumber} rankOption={this.state.rankOption} />
            </Table>
        </Layout>
    }
}



export default Index
