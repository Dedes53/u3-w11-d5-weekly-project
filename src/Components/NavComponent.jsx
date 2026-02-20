import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import AppleMusicLogo from './AppleMusicLogo';

function NavComponent() {
    return (
        <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Toggle className="color-am" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="color-am" id="basic-navbar-nav">
                    <Nav className="me-auto color-am">
                        <Nav.Link className="color-am" href="#home">Home</Nav.Link>
                        <Nav.Link className="color-am" href="#link">Link</Nav.Link>


                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand href="#home" ><AppleMusicLogo /></Navbar.Brand>

                <Nav.Link className="color-am" href="#accedi">Accedi</Nav.Link>

            </Container>
        </Navbar>
    )
}

export default NavComponent;