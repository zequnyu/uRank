import React from 'react';

import Body from  './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.handleNavSearch = this.handleNavSearch.bind(this);
    }

    handleNavSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {
        const navSearch = (
            <span className="field">
            <div className="control has-icons-right">
                <input className="input is-light is-rounded" type="email"
                       placeholder="Search university" onChange={this.handleNavSearch}/>
                <span className="icon is-right">
                    <i className="fas fa-search" />
                </span>
            </div>
        </span>);

        return (
            <div className="App">
                <Navbar input={navSearch}/>
                <Header/>
                <Body search={this.state.search}/>
                <Footer/>
            </div>
        )
    }
}

export default App;
