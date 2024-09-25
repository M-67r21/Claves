import Container from 'react-bootstrap/Container';
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className=""
      style={{
        fontSize: "1rem",
        fontWeight: "700",
        position: "fixed", 
        top: "0", 
        width: "100%",
        zIndex: "1000",
        backgroundColor:"#FFF",
        color:"#004aad",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      
      <Container>
        <LinkContainer to ="/">
          <Navbar.Brand>
            <h2
              style={{
                color:"#004aad",
              }}
            >Claves </h2>
          </Navbar.Brand> 
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3" >
            <LinkContainer to="/"
              style={{
                color:"#004aad",
              }}
            >
                    <Nav.Link>
                        Home
                    </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about"
              style={{
                color:"#004aad",
              }}
            >
                    <Nav.Link >
                        About
                    </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/services"
              style={{
                color:"#004aad",
              }}
            >
                    <Nav.Link >
                        Services
                    </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/products"
              style={{
                color:"#004aad",
              }}
            >
                    <Nav.Link >
                        Products
                    </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact"
              style={{
                color:"#004aad",
              }}
            >
                    <Nav.Link >
                        Contact
                    </Nav.Link>
            </LinkContainer>

            <Nav.Link href="/contact"
               style={{
                color: "white",
                fontSize: "1rem",
                fontWeight: "700",
                backgroundColor: "#ff914d",
                borderRadius: ".5rem",
                paddingInline:"1rem",
                width:"8rem",
              }}
            >
              Get a Qoute 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;