import styled from 'styled-components'
import Link from 'next/link'
import logoImg from '../static/logo.png'


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
    &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: #90AFC5;
    }
`;


const Header = () => (
    <StyledHeader>
        <StyledHeaderLeft>
            <Logo src={logoImg} />
        </StyledHeaderLeft>
        <StyledHeaderRight>
            <Title>uRank</Title>
            <NavBar>
                <Link href="/">
                    <LinkText>Ranking</LinkText>
                </Link>
                <Link href="/trending">
                    <LinkText>Trending</LinkText>
                </Link>
                <Link href="/about">
                    <LinkText>About</LinkText>
                </Link>
            </NavBar>
        </StyledHeaderRight>
    </StyledHeader>
);

export default Header