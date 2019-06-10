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
            page: 'home',
            search: ''
        };
        this.handlePageSwitch = this.handlePageSwitch.bind(this);
        this.handleNavSearch = this.handleNavSearch.bind(this);
    }

    handlePageSwitch(event) {
        event.preventDefault();
        this.setState( {page: event.currentTarget.name});

    }

    handleNavSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {
        const navHome = (
            <a
                name="home"
                className={this.state.page === 'home' ? "button is-light is-active" : "button is-light"}
                href="/"
                onClick={this.handlePageSwitch}
            >
                <span className="icon">
                    <i className="fas fa-home" />
                </span>
                <span>Home</span>
            </a>
        );

        const navAbout = (
            <a
                name="about"
                className={this.state.page === 'about' ? "button is-light is-active" : "button is-light"}
                href="/"
                onClick={this.handlePageSwitch}
            >
                <span className="icon">
                    <i className="fas fa-info-circle" />
                </span>
                <span>About</span>
            </a>
        );

        const navInput = this.state.page === 'home' ? (
            <span className="field">
                <div className="control has-icons-right">
                    <input
                        className="input is-light is-rounded"
                        placeholder="Search university"
                        onChange={this.handleNavSearch}
                        value={this.state.search}
                    />
                    <span className="icon is-right">
                        <i className="fas fa-search" />
                    </span>
                </div>
            </span>
        ) : null;

        return (
            <div className="App">
                <Navbar
                    home={navHome}
                    about={navAbout}
                    input={navInput}
                />
                <Header/>
                <Body search={this.state.search}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
