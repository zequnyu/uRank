import styled from 'styled-components'
import Layout from '../components/MyLayout.js'
import ReactModal from 'react-modal';
import Link from 'next/link'


// ---- Menu Area ----

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

const SelectionMenuRight = styled.div`
    flex: 2;
    padding: 10px;
    display: flex;
    justify-content: center;
`;

const PageChangeButton = styled.button`
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
    &:hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }
    padding: 0;
    text-align: center;
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
                <PageChangeButton onClick={this.handlePageDecrease}>&lt;</PageChangeButton>
                <MenuPageLabel>{this.props.pageNumber+1}/{this.props.pageTotal}</MenuPageLabel>
                <PageChangeButton onClick={this.handlePageIncrease}>&gt;</PageChangeButton>
            </SelectionMenuRight>
        </SelectionMenu>
    }
}

// ---- Modal Area ----

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
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px 10px;
    

    #avelabel {
        grid-row: 1;
        grid-column: 2/4;
    }
    #ave {
        grid-row: 2;
        grid-column: 1;
    }
    #ave2019 {
        grid-row: 2;
        grid-column: 2;
    }
    #ave2018 {
        grid-row: 2;
        grid-column: 3;
    }
    #ave2017 {
        grid-row: 2;
        grid-column: 4;
    }
    #ave2016 {
        grid-row: 2;
        grid-column: 5;
    }
    #ave2015 {
        grid-row: 2;
        grid-column: 6;
    }
    
    #qslabel {
        grid-row: 3;
        grid-column: 2/4;
    }
    #qsave {
        grid-row: 4;
        grid-column: 1;
    }
    #qs2019 {
        grid-row: 4;
        grid-column: 2;
    }
    #qs2018 {
        grid-row: 4;
        grid-column: 3;
    }
    #qs2017 {
        grid-row: 4;
        grid-column: 4;
    }
    #qs2016 {
        grid-row: 4;
        grid-column: 5;
    }
    #qs2015 {
        grid-row: 4;
        grid-column: 6;
    }
    
    #usnewslabel {
        grid-row: 5;
        grid-column: 2/4;
    }
    #usnewsave {
        grid-row: 6;
        grid-column: 1;
    }
    #usnews2019 {
        grid-row: 6;
        grid-column: 2;
    }
    #usnews2018 {
        grid-row: 6;
        grid-column: 3;
    }
    #usnews2017 {
        grid-row: 6;
        grid-column: 4;
    }
    #usnews2016 {
        grid-row: 6;
        grid-column: 5;
    }
    #usnews2015 {
        grid-row: 6;
        grid-column: 6;
    }
    
    #timeslabel {
        grid-row: 7;
        grid-column: 2/4;
    }
    #timesave {
        grid-row: 8;
        grid-column: 1;
    }
    #times2019 {
        grid-row: 8;
        grid-column: 2;
    }
    #times2018 {
        grid-row: 8;
        grid-column: 3;
    }
    #times2017 {
        grid-row: 8;
        grid-column: 4;
    }
    #times2016 {
        grid-row: 8;
        grid-column: 5;
    }
    #times2015 {
        grid-row: 8;
        grid-column: 6;
    }
    
    #arwulabel {
        grid-row: 9;
        grid-column: 2/4;
    }
    #arwuave {
        grid-row: 10;
        grid-column: 1;
    }
    #arwu2019 {
        grid-row: 10;
        grid-column: 2;
    }
    #arwu2018 {
        grid-row: 10;
        grid-column: 3;
    }
    #arwu2017 {
        grid-row: 10;
        grid-column: 4;
    }
    #arwu2016 {
        grid-row: 10;
        grid-column: 5;
    }
    #arwu2015 {
        grid-row: 10;
        grid-column: 6;
    }
    
`;

const OptionLabel = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    color: #2A3132;
    border-bottom: 1px solid #336B87;
    width: 80%;
`;

const OptionButton = styled(OptionButtonBasis)`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 10px;
`;

const optionList = [
    { id: 'ave', label: 'Average'},
    { id: 'ave2019', label: 'Ave - 2019'},
    { id: 'ave2018', label: 'Ave - 2018'},
    { id: 'ave2017', label: 'Ave - 2017'},
    { id: 'ave2016', label: 'Ave - 2016'},
    { id: 'ave2015', label: 'Ave - 2015'},
    { id: 'qsave', label: 'QS Ave'},
    { id: 'usnewsave', label: 'US News Ave'},
    { id: 'timesave', label: 'Times Ave'},
    { id: 'arwuave', label: 'ARWU Ave'},
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
                <OptionLabel id="avelabel">· Average</OptionLabel>
                <OptionLabel id="qslabel">· QS</OptionLabel>
                <OptionLabel id="usnewslabel">· US News</OptionLabel>
                <OptionLabel id="timeslabel">· Times</OptionLabel>
                <OptionLabel id="arwulabel">· ARWU</OptionLabel>
            </ModalTable>
        )
    }
}

// ---- Table Area ----

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
        let rankTd = this.props.rankOption;

        let sortedData = this.props.data.slice().sort(function (a, b) {
            return (a[rankTd] - b[rankTd]);
        }).filter(item => item[rankTd] > 0).slice(this.props.pageNumber*15, this.props.pageNumber*15+15);


        return (
            <tbody>
                <TableRow>
                    <TableHeader>Rank</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Region</TableHeader>
                </TableRow>
                {sortedData.map(item => (
                    <Link
                        as={`analysis/${item.id}`}
                        href={`/analysis?id=${item.id}`}
                        key={item.id}
                    >
                        <TableRow >
                            <td>{item[rankTd]}</td>
                            <td>{item.name}</td>
                            <td>{item.region}</td>
                        </TableRow>
                    </Link>
                ))}
            </tbody>
        );
    }
}

// ---- Index Area ----

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.initialiseMyData();

        this.state = {
            rankOption: "ave",
            pageNumber: 0,
            showModal: false,
            itemNumOnOnePage: 15,
            pageTotal: this.initialisePageTotalNum()
        };

        this.handlePageNumberChange = this.handlePageNumberChange.bind(this);
        this.handleModalChange = this.handleModalChange.bind(this);
        this.handleRankOptionChange = this.handleRankOptionChange.bind(this);
    }

    initialisePageTotalNum() {
        let len = this.dataWithAve.filter(item => item['ave'] > 0).length, num = 15;
        return (len % num === 0) ? parseInt(len / num) : parseInt( len / num)+1;
    }

    updatePageTotalNum() {
        let len = this.dataWithAve.filter(item => item[this.state.rankOption] > 0).length, num = this.state.itemNumOnOnePage;
        return (len % num === 0) ? parseInt(len / num) : parseInt( len / num)+1;
    }

    initialiseMyData() {
        this.dataWithAve = this.props.input.slice();

        for (let i=0; i<this.props.input.length; i++) {
            this.dataWithAve[i]['qsave'] = this.selectDataByTypeFromItem(i, 'qs');
            this.dataWithAve[i]['usnewsave'] = this.selectDataByTypeFromItem(i, 'usnews');
            this.dataWithAve[i]['timesave'] = this.selectDataByTypeFromItem(i, 'times');
            this.dataWithAve[i]['arwuave'] = this.selectDataByTypeFromItem(i, 'arwu');

            this.dataWithAve[i]['ave2019'] = this.selectDataByTypeFromItem(i, '2019');
            this.dataWithAve[i]['ave2018'] = this.selectDataByTypeFromItem(i, '2018');
            this.dataWithAve[i]['ave2017'] = this.selectDataByTypeFromItem(i, '2017');
            this.dataWithAve[i]['ave2016'] = this.selectDataByTypeFromItem(i, '2016');
            this.dataWithAve[i]['ave2015'] = this.selectDataByTypeFromItem(i, '2015');

            let allAve = [this.dataWithAve[i]['qsave'], this.dataWithAve[i]['usnewsave'], this.dataWithAve[i]['timesave'], this.dataWithAve[i]['arwuave']].filter(item => item > 0);

            this.dataWithAve[i]['ave'] = (allAve.length === 0) ? -1 : Index.roundToTwo(allAve.reduce((t, c) => t + c, 0)*1.0/allAve.length);
        }
    }

    selectDataByTypeFromItem(index, rank) {
        let partDataArray = Object.keys(this.props.input[index]).filter(key => key.includes(rank)).reduce((obj, key) => {
            obj.push(this.props.input[index][key]);
            return obj
        }, []).filter(item => item > 0);

        return (partDataArray.length === 0) ? -1 : Index.roundToTwo(partDataArray.reduce((t, c) => t + c, 0)*1.0/partDataArray.length)
    }

    static roundToTwo(num) {
        return Math.round(num * 100) / 100;
    }

    handlePageNumberChange(newPageNumber) {
        if (newPageNumber < this.state.pageTotal && newPageNumber >= 0) {
            this.setState({pageNumber: newPageNumber});
        }
    }

    handleModalChange(newModalState) {
        this.setState({ showModal: newModalState });
    }

    handleRankOptionChange(newRankOption) {
        // reset page number to head
        this.setState({ pageNumber: 0 });
        this.setState({ rankOption: newRankOption });
        this.setState({ pageTotal: this.updatePageTotalNum() });
    }

    render() {
        return <Layout>
            <MySelectionMenu
                onModalStateChange={this.handleModalChange}
                modalState={this.state.showModal}
                onPageNumberChange={this.handlePageNumberChange}
                pageTotal = {this.state.pageTotal}
                pageNumber={this.state.pageNumber}
                onRankOptionChange={this.handleRankOptionChange}
                rankOption={this.state.rankOption}
            />
            <Table>
                <TableContent
                    pageNumber={this.state.pageNumber}
                    rankOption={this.state.rankOption}
                    data={this.dataWithAve}
                />
            </Table>
        </Layout>
    }
}

Index.getInitialProps = async function() {
    const inputData = await import('../static/data.json');

    //console.log('Data fetched');

    return {
        input: inputData.default
    }
};


export default Index
