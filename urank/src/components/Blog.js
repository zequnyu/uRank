import React from 'react';
import ReactMarkdown from 'react-markdown'

import mdFile from '../static/blog.md'
import whiteLogo from '../static/nav2.png';

import 'bulma/css/bulma.min.css'
import '../styles/Blog.css'


class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {text: null};
    }

    componentWillMount() {
        fetch(mdFile)
            .then(response => response.text())
            .then(text => this.setState({text: text}));
    }

    render() {
        return(
            <div>
                <section className="hero is-medium is-dark">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                <span>Behind</span>
                                <span><img src={whiteLogo} alt="White Logo" id="logo-at-title" /></span>
                            </h1>
                            <h2 className="subtitle">
                                You might want to know more...
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="columns">
                        <div className="box column is-three-quarters-tablet is-two-thirds-desktop is-half-widescreen" id="article-box">
                            <ReactMarkdown
                                source={this.state.text}
                                linkTarget="_blank"
                            />
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

Blog.propTypes = {};

export default Blog;