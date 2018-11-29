import styled from 'styled-components'
import Header from './Header'

const MyLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 20px;
    max-width: 1000px;
    margin: auto;
`;

const Footer = styled.footer`
    margin-top: 30px;
    padding-top: 5px;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8em;
    color: #2A3132;
`;

const LogoLabel = styled.span`
    font-family: 'Pacifico', cursive;
    &:hover {
        color: #763626;
    }
`;

const NameLink = styled.a`
    color: #2A3132;
    text-decoration: none;
    
    &:visited, &:active {
        color: #2A3132;
    }
    &:hover {
        color: #90AFC5;
        text-decoration: underline;
    }
`;

const Layout = (props) => (
    <MyLayout>
        <Header />
        {props.children}
        <Footer><LogoLabel>uRank</LogoLabel> collected with ❤️ by <NameLink href="mailto:zequnyu11@gmail.com">Zequn Yu️</NameLink>.</Footer>
    </MyLayout>
);


export default Layout