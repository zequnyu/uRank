import styled from 'styled-components'
import Link from 'next/link'
import logoImg from '../static/logo.jpg'


const MyLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 20px;
    max-width: 1000px;
    margin: auto;
`;

const Header = styled.header`
`;

const StyledHeader = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
`;

const StyledHeaderLeft = styled.div`
    flex: 2;
`;

const Logo = styled.img`
    max-width: 100%;
    height: auto;
`;

const StyledHeaderRight = styled.div`
    flex: 3;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.h1`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 3.5em;
    text-align: center;
    color: #2A3132;
    font-family: 'Pacifico', cursive;
    &:hover {
        color: #763626;
    }
`;

const NavBar = styled.div`
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;

const LinkText = styled.a`
    font-size: 1.2em;
    color: #336B87;
    font-family: 'Open Sans', sans-serif;
    transition: all 0.4s linear;
    &:hover {
        cursor: pointer;
        color: #90AFC5;
    }
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
        <Header>
            <StyledHeader>
                <StyledHeaderLeft>
                    <Logo src={logoImg} />
                </StyledHeaderLeft>
                <StyledHeaderRight>
                    <Title>uRank</Title>
                    <NavBar>
                        <Link href="/">
                            <LinkText><i className="fas fa-chart-bar" />Ranking</LinkText>
                        </Link>
                        <Link href={`/analysis?id=10001`} as={`analysis/10001`} >
                            <LinkText><i className="fas fa-chart-line" />Analysis</LinkText>
                        </Link>
                        <Link href={`/about`}>
                            <LinkText><i className="fas fa-info-circle" />About</LinkText>
                        </Link>
                    </NavBar>
                </StyledHeaderRight>
            </StyledHeader>
        </Header>
        {props.children}
        <Footer><LogoLabel>uRank</LogoLabel> developed with ❤️ by <NameLink href="https://github.com/zequnyu/uRank">Zequn Yu️</NameLink>.</Footer>
    </MyLayout>
);


export default Layout