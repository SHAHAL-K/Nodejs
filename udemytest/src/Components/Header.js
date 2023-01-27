import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
const navbarStyle = {
    backgroundColor : "darkGreen"
}
const Header = (props) => {
    return(
        <Navbar style={navbarStyle} variant="dark">
        <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        </Container>
        </Navbar>
    )
};
export default Header;